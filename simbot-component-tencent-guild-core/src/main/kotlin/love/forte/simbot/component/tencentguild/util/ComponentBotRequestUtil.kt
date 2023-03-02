/*
 * Copyright (c) 2022-2023. ForteScarlet.
 *
 * This file is part of simbot-component-tencent-guild.
 *
 * simbot-component-tencent-guild is free software: you can redistribute it and/or modify it under the terms of the GNU Lesser General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 *
 * simbot-component-tencent-guild is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License along with simbot-component-tencent-guild. If not, see <https://www.gnu.org/licenses/>.
 */

@file:JvmName("BotRequestUtil")

package love.forte.simbot.component.tencentguild.util

import love.forte.simbot.component.tencentguild.TencentGuildComponentBot
import love.forte.simbot.qguild.api.TencentApi
import love.forte.simbot.qguild.request
import love.forte.simbot.qguild.requestBy


/**
 * 直接通过bot进行请求。
 *
 * @throws love.forte.simbot.qguild.TencentApiException 如果返回状态码不在 200..300之间。
 */
@JvmSynthetic
@Deprecated("使用更符合语义的Api.requestBy(Bot) 或 Bot.request(Api)", ReplaceWith("requestBy(bot)"))
public suspend inline fun <R> TencentApi<R>.request(bot: TencentGuildComponentBot): R = requestBy(bot)

/**
 * 直接通过bot进行请求。
 *
 * @throws love.forte.simbot.qguild.TencentApiException 如果返回状态码不在 200..300之间。
 */
@JvmSynthetic
public suspend inline fun <R> TencentApi<R>.requestBy(bot: TencentGuildComponentBot): R {
    return requestBy(bot.source)
}

/**
 * 直接通过bot进行请求。
 *
 * @throws love.forte.simbot.qguild.TencentApiException 如果返回状态码不在 200..300之间。
 */
@JvmSynthetic
public suspend inline fun <R> TencentGuildComponentBot.request(api: TencentApi<R>): R {
    return source.request(api)
}
