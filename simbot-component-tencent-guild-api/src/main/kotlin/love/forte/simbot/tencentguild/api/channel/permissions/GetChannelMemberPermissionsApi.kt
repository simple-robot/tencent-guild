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

package love.forte.simbot.tencentguild.api.channel.permissions

import kotlinx.serialization.DeserializationStrategy
import love.forte.simbot.tencentguild.api.GetTencentApi
import love.forte.simbot.tencentguild.api.RouteInfoBuilder
import love.forte.simbot.tencentguild.model.ChannelPermissions

/**
 *
 * [获取指定子频道的权限](https://bot.q.qq.com/wiki/develop/api/openapi/channel_permissions/get_channel_permissions.html)
 *
 * 用于获取 子频道 `channel_id` 下用户 `user_id` 的权限。
 *
 * - 获取子频道用户权限。
 * - 要求操作人具有管理子频道的权限，如果是机器人，则需要将机器人设置为管理员。
 *
 * @author ForteScarlet
 */
public class GetChannelMemberPermissionsApi private constructor(
    channelId: String, memberId: String
) : GetTencentApi<ChannelPermissions>() {
    public companion object Factory {
        /**
         * 构造 [GetChannelMemberPermissionsApi]
         */
        @JvmStatic
        public fun create(channelId: String, memberId: String): GetChannelMemberPermissionsApi =
            GetChannelMemberPermissionsApi(channelId, memberId)
    }

    // GET /channels/{channel_id}/members/{user_id}/permissions
    private val path = arrayOf("channels", channelId, "members", memberId, "permissions")

    override val resultDeserializer: DeserializationStrategy<ChannelPermissions>
        get() = ChannelPermissions.serializer()

    override fun route(builder: RouteInfoBuilder) {
        builder.apiPath = path
    }
}
