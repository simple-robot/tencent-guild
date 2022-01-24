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
import love.forte.simbot.CharSequenceID
import love.forte.simbot.tencentguild.TencentUserInfo

/**
 * [User](https://bot.q.qq.com/wiki/develop/api/openapi/user/model.html)
 *
 */
@Serializable
internal data class TencentUserInfoImpl(
    override val id: CharSequenceID,
    override val username: String,
    override val avatar: String,
    @SerialName("bot")
    override val isBot: Boolean,
    @SerialName("union_openid")
    override val unionOpenid: String? = null,
    @SerialName("union_user_account")
    override val unionUserAccount: String? = null
) : TencentUserInfo