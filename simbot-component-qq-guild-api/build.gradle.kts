/*
 * Copyright (c) 2023. ForteScarlet.
 *
 * This file is part of simbot-component-qq-guild.
 *
 * simbot-component-qq-guild is free software: you can redistribute it and/or modify it under the terms
 * of the GNU Lesser General Public License as published by the Free Software Foundation,
 * either version 3 of the License, or (at your option) any later version.
 *
 * simbot-component-qq-guild is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License along with simbot-component-qq-guild.
 * If not, see <https://www.gnu.org/licenses/>.
 */

plugins {
    kotlin("multiplatform")
    `qq-guild-multiplatform-maven-publish`
//    id("simbot-tencent-guild.module-conventions")
//    id("simbot-tencent-guild.maven-publish")
    kotlin("plugin.serialization")
    `qq-guild-dokka-partial-configure`
}

repositories {
    mavenCentral()
}

kotlin {
    explicitApi()

    sourceSets.configureEach {
        languageSettings {
            optIn("love.forte.simbot.qguild.InternalApi")
        }
    }

    jvm {
        withJava()
        compilations.all {
            kotlinOptions {
                jvmTarget = "1.8"
                javaParameters = true
                freeCompilerArgs = freeCompilerArgs + listOf("-Xjvm-default=all")
            }
        }
        testRuns["test"].executionTask.configure {
            useJUnitPlatform()
        }
    }

    js(IR) {
        nodejs()
    }


    val mainPresets = mutableSetOf<org.jetbrains.kotlin.gradle.plugin.KotlinSourceSet>()
    val testPresets = mutableSetOf<org.jetbrains.kotlin.gradle.plugin.KotlinSourceSet>()

    // see https://kotlinlang.org/docs/native-target-support.html
    val supportTargets = setOf(
        // Tier 1
        "linuxX64",
        "macosX64",
        "macosArm64",
        "iosSimulatorArm64",
        "iosX64",

        // Tier 2
//        "linuxArm64",
        "watchosSimulatorArm64",
        "watchosX64",
        "watchosArm32",
        "watchosArm64",
        "tvosSimulatorArm64",
        "tvosX64",
        "tvosArm64",
        "iosArm64",

        // Tier 3
//        "androidNativeArm32",
//        "androidNativeArm64",
//        "androidNativeX86",
//        "androidNativeX64",
        "mingwX64",
//        "watchosDeviceArm64",
    )

    targets {
        presets.filterIsInstance<org.jetbrains.kotlin.gradle.plugin.mpp.AbstractKotlinNativeTargetPreset<*>>()
            .filter { it.name in supportTargets }
            .forEach { presets ->
                val target = fromPreset(presets, presets.name)
                val mainSourceSet = target.compilations["main"].kotlinSourceSets.first()
                val testSourceSet = target.compilations["test"].kotlinSourceSets.first()

                val tn = target.name
                when {
                    // just for test
                    // main中只使用HttpClient但用不到引擎，没必要指定

                    // win
                    tn.startsWith("mingw") -> {
                        testSourceSet.dependencies {
                            implementation(libs.ktor.client.winhttp)
                        }
                    }
                    // linux: curl
                    // CIO not support HTTP/2
                    tn.startsWith("linux") -> {
                        if ("Linux" in System.getProperty("os.name")) {
                            // win开发系统上懒得装 curl 环境了装半天都没啥效果没法编译
                            testSourceSet.dependencies {
                                implementation(libs.ktor.client.curl)
                            }
                        } else {
                            testSourceSet.dependencies {
                                implementation(libs.ktor.client.cio)
                            }
                        }
                    }

                    // darwin based
                    tn.startsWith("macos")
                            || tn.startsWith("ios")
                            || tn.startsWith("watchos")
                            || tn.startsWith("tvos") -> {
                        testSourceSet.dependencies {
                            implementation(libs.ktor.client.darwin)
                        }
                    }
                }

                mainPresets.add(mainSourceSet)
                testPresets.add(testSourceSet)
            }
    }

    sourceSets {
        val commonMain by getting {
            dependencies {
                api(libs.ktor.client.core)
                api(libs.ktor.client.contentNegotiation)
                api(libs.ktor.serialization.kotlinxJson)
                api(libs.kotlinx.serialization.json)
                api(simbotLogger)
            }
        }

        val commonTest by getting {
            dependencies {
                implementation(kotlin("test"))
                implementation(libs.kotlinx.coroutines.test)
            }
        }

        getByName("jvmMain") {
            dependencies {
                compileOnly(simbotApi) // use @Api4J annotation
            }
        }

        getByName("jvmTest") {
            dependencies {
                runtimeOnly(libs.ktor.client.cio)
                implementation(simbotApi) // use @Api4J annotation
                implementation(libs.log4j.api)
                implementation(libs.log4j.core)
                implementation(libs.log4j.slf4jImpl)
            }
        }

        getByName("jsMain") {
            dependencies {
                implementation(libs.ktor.client.js)
            }
        }

        val nativeMain by creating {
            dependsOn(commonMain)
        }

        val nativeTest by creating {
            dependsOn(commonTest)
        }

        configure(mainPresets) { dependsOn(nativeMain) }
        configure(testPresets) { dependsOn(nativeTest) }

    }

}

// suppress all?
//tasks.withType<org.jetbrains.dokka.gradle.DokkaTaskPartial>().configureEach {
//    dokkaSourceSets.configureEach {
//        suppress.set(true)
//        perPackageOption {
//            suppress.set(true)
//        }
//    }
//}


