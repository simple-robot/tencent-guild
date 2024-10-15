/*
 * Copyright (c) 2023-2024. ForteScarlet.
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

import org.jetbrains.dokka.gradle.engine.parameters.VisibilityModifier
import java.net.URI
import java.time.Year

plugins {
    id("org.jetbrains.dokka")
}

// dokka config
dokka {
    pluginsConfiguration.html {
        customAssets.from(
            rootProject.file(".simbot/dokka-assets/logo-icon.svg"),
            rootProject.file(".simbot/dokka-assets/logo-icon-light.svg"),
        )
        customStyleSheets.from(rootProject.file(".simbot/dokka-assets/css/kdoc-style.css"))
        if (!isSimbotLocal()) {
            templatesDir = rootProject.file(".simbot/dokka-templates")
        }
        footerMessage =
            "© 2022-${Year.now().value} <a href='https://github.com/simple-robot'>Simple Robot</a>. All rights reserved."

        separateInheritedMembers = true
        mergeImplicitExpectActualDeclarations = true
        homepageLink = P.ComponentQQGuild.HOMEPAGE
    }

    dokkaSourceSets.configureEach {
        version = P.ComponentQQGuild.version
        documentedVisibilities.set(
            listOf(
                VisibilityModifier.Public,
                VisibilityModifier.Protected
            )
        )

        sourceLink {
            localDirectory.set(projectDir.resolve("src"))
            val relativeTo = projectDir.relativeTo(rootProject.projectDir)
                .path
                .replace('\\', '/')

            remoteUrl("${P.ComponentQQGuild.HOMEPAGE}/tree/main/$relativeTo/src/")
            remoteLineSuffix.set("#L")
        }

        perPackageOption {
            matchingRegex.set(".*internal.*")
            suppress.set(true)
        }

        fun externalDocumentation(name: String, docUri: URI) {
            externalDocumentationLinks.register(name) {
                url.set(docUri)
                packageListUrl.set(docUri.resolve("package-list"))
            }
        }

        if (!isSimbotLocal()) {
            // kotlin-coroutines doc
            externalDocumentation("kotlinx-coroutines", URI.create("https://kotlinlang.org/api/kotlinx.coroutines/"))

            // kotlin-serialization doc
            externalDocumentation(
                "kotlinx-serialization",
                URI.create("https://kotlinlang.org/api/kotlinx.serialization/")
            )

            // ktor
            externalDocumentation("ktor", URI.create("https://api.ktor.io/"))

            // simbot doc
            externalDocumentation("simbot", URI.create("https://docs.simbot.forte.love/main-v4/"))
        }
    }
}

//tasks.withType<DokkaTaskPartial>().configureEach {
//    dokkaSourceSets.configureEach {
//
//        fun externalDocumentation(docUri: URI) {
//            externalDocumentationLink {
//                url.set(docUri.toURL())
//                packageListUrl.set(docUri.resolve("package-list").toURL())
//            }
//        }
//
//        if (!isSimbotLocal()) {
//            // kotlin-coroutines doc
//            externalDocumentation(URI.create("https://kotlinlang.org/api/kotlinx.coroutines/"))
//
//            // kotlin-serialization doc
//            externalDocumentation(URI.create("https://kotlinlang.org/api/kotlinx.serialization/"))
//
//            // ktor
//            externalDocumentation(URI.create("https://api.ktor.io/"))
//
//            // simbot doc
//            externalDocumentation(URI.create("https://docs.simbot.forte.love/main-v4/"))
//        }
//    }
//}
