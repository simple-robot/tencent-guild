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

package love.forte.simbot.tencentguild.api.guild

import io.ktor.http.*
import kotlinx.serialization.DeserializationStrategy
import love.forte.simbot.tencentguild.api.RouteInfoBuilder
import love.forte.simbot.tencentguild.api.TencentApi
import love.forte.simbot.tencentguild.model.Guild

/**
 * [获取频道详情](https://bot.q.qq.com/wiki/develop/api/openapi/guild/model.html)
 *
 * 用于获取 `guildId` 指定的频道的详情。
 *
 */
public class GetGuildApi private constructor(guildId: String) : TencentApi<Guild>() {
    public companion object Factory {

        /**
         * 构造 [GetGuildApi].
         *
         */
        @JvmStatic
        public fun create(guildId: String): GetGuildApi = GetGuildApi(guildId)
    }

    private val path = arrayOf("guilds", guildId)

    override val resultDeserializer: DeserializationStrategy<Guild>
        get() = Guild.serializer()

    override val method: HttpMethod
        get() = HttpMethod.Get

    override fun route(builder: RouteInfoBuilder) {
        builder.apiPath = path
    }

    override val body: Any? get() = null

}
