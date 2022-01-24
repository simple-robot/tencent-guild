/*
 *  Copyright (c) 2022-2022 ForteScarlet <ForteScarlet@163.com>
 *
 *  根据 GNU LESSER GENERAL PUBLIC LICENSE 3 获得许可；
 *  除非遵守许可，否则您不得使用此文件。
 *  您可以在以下网址获取许可证副本：
 *
 *       https://www.gnu.org/licenses/lgpl-3.0-standalone.html
 *
 *   有关许可证下的权限和限制的具体语言，请参见许可证。
 */

package love.forte.simbot.tencentguild.internal

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import kotlinx.serialization.Transient
import love.forte.simbot.ID
import love.forte.simbot.definition.PermissionStatus
import love.forte.simbot.tencentguild.Permissions
import love.forte.simbot.tencentguild.TencentChannelPermissionsInfo

/**
 *
 * @author ForteScarlet
 */
@Serializable
internal data class TencentChannelPermissionsInfoImpl(
    override val id: ID,
    @SerialName("channel_id")
    override val channelId: ID,
    @SerialName("user_id")
    override val userId: ID,
    override val permissions: Permissions
) : TencentChannelPermissionsInfo {
    @Transient
    override var status: PermissionStatus = permissions.status
        internal set

}