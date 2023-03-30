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
    `simbot-tcg-suspend-transform-configure`
    id("simbot-tencent-guild.module-conventions")
    id("simbot-tencent-guild.maven-publish")
    kotlin("plugin.serialization")
    `qq-guild-dokka-partial-configure`
}

kotlin {
    sourceSets.configureEach {
        languageSettings {
            optIn("love.forte.simbot.InternalSimbotApi")
        }
    }
}

dependencies {
    api(project(":simbot-component-qq-guild-core-common"))
    compileOnly(simbotCore)

    compileOnly(libs.kotlinx.serialization.properties)
    compileOnly(libs.charleskorn.kaml)

    testImplementation(simbotCore)
    testImplementation(libs.charleskorn.kaml)
    testImplementation("love.forte.simbot:simbot-logger-slf4j-impl:3.0.0-RC.3")

}

