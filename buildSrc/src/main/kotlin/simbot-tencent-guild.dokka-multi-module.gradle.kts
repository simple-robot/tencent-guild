/*
 * Copyright (c) 2022-2024. ForteScarlet.
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

import java.time.Year

plugins {
    id("org.jetbrains.dokka")
}


repositories {
    mavenCentral()
}

dependencies {
    dokka(project(":simbot-component-qq-guild-api"))
    dokka(project(":simbot-component-qq-guild-stdlib"))
    dokka(project(":simbot-component-qq-guild-core"))
}


fun org.jetbrains.dokka.gradle.AbstractDokkaTask.configOutput(format: String) {
    moduleName.set("Simple Robot 组件 | QQ Guild")
    outputDirectory.set(rootProject.file("build/dokka/$format"))
}

dokka {
    pluginsConfiguration.html {
        customAssets.from(
            ".simbot/dokka-assets/logo-icon.svg",
            ".simbot/dokka-assets/logo-icon-light.svg"
        )
        customStyleSheets.from(".simbot/dokka-assets/css/kdoc-style.css")
        if (!isSimbotLocal()) {
            templatesDir = rootProject.file(".simbot/dokka-templates")
        }
        footerMessage =
            "© 2022-${Year.now().value} <a href='https://github.com/simple-robot'>Simple Robot</a>. All rights reserved."
        separateInheritedMembers = true
        mergeImplicitExpectActualDeclarations = true
        homepageLink = P.ComponentQQGuild.HOMEPAGE
    }
}

//tasks.named<org.jetbrains.dokka.gradle.DokkaMultiModuleTask>("dokkaHtmlMultiModule") {
//    configOutput("html")
//
//    rootProject.file("README.md").takeIf { it.exists() }?.also {
//        includes.from(it)
//    }

//    pluginConfiguration<DokkaBase, DokkaBaseConfiguration> {
//        customAssets = listOf(
//            rootProject.file(".simbot/dokka-assets/logo-icon.svg"),
//            rootProject.file(".simbot/dokka-assets/logo-icon-light.svg"),
//        )
//        customStyleSheets = listOf(rootProject.file(".simbot/dokka-assets/css/kdoc-style.css"))
//        if (!isSimbotLocal()) {
//            templatesDir = rootProject.file(".simbot/dokka-templates")
//        }
//        footerMessage = "© 2022-${Year.now().value} <a href='https://github.com/simple-robot'>Simple Robot</a>. All rights reserved."
//        separateInheritedMembers = true
//        mergeImplicitExpectActualDeclarations = true
//        homepageLink = P.ComponentQQGuild.HOMEPAGE
//    }
//}

