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

package love.forte.simbot.component.tencentguild.internal

import love.forte.simbot.ID
import love.forte.simbot.action.MessageReplyReceipt
import love.forte.simbot.message.MessageReceipt
import love.forte.simbot.tencentguild.TencentMessage

/**
 *
 * @author ForteScarlet
 */
@Suppress("MemberVisibilityCanBePrivate")
internal class MessageAsReceipt(val messageResult: TencentMessage) : MessageReceipt {
    override val id: ID
        get() = messageResult.id

    override val isSuccess: Boolean
        get() = true
}

/**
 *
 * @author ForteScarlet
 */
@Suppress("MemberVisibilityCanBePrivate")
internal class MessageAsReplyReceipt(val messageResult: TencentMessage) : MessageReplyReceipt {
    override val id: ID
        get() = messageResult.id

    override val isReplySuccess: Boolean
        get() = true

    override val isSuccess: Boolean
        get() = true
}

internal fun TencentMessage.asReceipt(): MessageReceipt = MessageAsReceipt(this)

internal fun TencentMessage.asReplyReceipt(): MessageReplyReceipt = MessageAsReplyReceipt(this)