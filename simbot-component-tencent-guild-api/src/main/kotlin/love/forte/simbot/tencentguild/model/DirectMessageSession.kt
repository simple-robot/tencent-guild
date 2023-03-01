/*
 * Copyright (c) 2023. ForteScarlet.
 *
 * This file is part of simbot-component-tencent-guild.
 *
 * simbot-component-tencent-guild is free software: you can redistribute it and/or modify it under the terms of the GNU Lesser General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 *
 * simbot-component-tencent-guild is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License along with simbot-component-tencent-guild. If not, see <https://www.gnu.org/licenses/>.
 */

package love.forte.simbot.tencentguild.model

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import love.forte.simbot.tencentguild.utils.InstantISO8601Serializer
import java.time.Instant


/**
 * [私信会话对象（DMS）](https://bot.q.qq.com/wiki/develop/api/openapi/dms/model.html)
 *
 * @author ForteScarlet
 */
@Serializable
public data class DirectMessageSession(
    /**
     * 私信会话关联的频道 id
     */
    @SerialName("guild_id") val guildId: String,
    /**
     * 私信会话关联的子频道 id
     */
    @SerialName("channel_id") val channelId: String,
    /**
     * 创建私信会话时间戳
     */
    @Serializable(InstantISO8601Serializer::class)
    @SerialName("create_time")
    val createTime: Instant,
)

