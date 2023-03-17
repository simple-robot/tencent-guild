/*
 * Copyright (c) 2022-2023. ForteScarlet.
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

package love.forte.simbot.component.qguild.message

import love.forte.simbot.ID
import love.forte.simbot.message.At
import love.forte.simbot.message.AtAll
import love.forte.simbot.message.Messages
import love.forte.simbot.message.Text
import love.forte.simbot.qguild.api.message.MessageSendApi
import love.forte.simbot.qguild.message.ContentTextEncoder
import love.forte.simbot.qguild.model.Message
import love.forte.simbot.message.Message as SimbotMessage


internal object ContentParser : SendingMessageParser {
    override suspend fun invoke(
        index: Int,
        element: SimbotMessage.Element<*>,
        messages: Messages?,
        builder: MessageSendApi.Body.Builder
    ) {
        when (element) {
            is Text -> {
                // 转义为无内嵌格式的文本
                builder.appendContent(ContentTextEncoder.encode(element.text))
            }

            is QGContentText -> {
                builder.appendContent(element.content)
            }
        }
    }
}



internal object QGMessageParser : ReceivingMessageParser {
    private const val AT_USER_GROUP = "ur"
    private const val AT_USER_VALUE = "uv"

    private const val AT_EVERYONE_GROUP = "all"
    private const val MENTION_CHANNEL_GROUP = "cl"
    private const val MENTION_CHANNEL_VALUE = "cv"

    private const val EMOJI_GROUP = "ej"
    private const val EMOJI_VALUE = "ev"

    private val replaceRegex = Regex(
        "(?<$AT_USER_GROUP><@!?(?<$AT_USER_VALUE>\\d+)>)" +
                "|(?<$AT_EVERYONE_GROUP>@everyone)" +
                "|(?<$MENTION_CHANNEL_GROUP><#(?<$MENTION_CHANNEL_VALUE>\\d+)>)" +
                "|(?<$EMOJI_GROUP><emoji:(?<$EMOJI_VALUE>\\d+)>)"
    )
    // private val mentionRegex = Regex("<@!(?<uid>\\d+)>|<#!(?<cid>\\d+)>")
    /*
        TODO
        @用户	<@user_id> 或者 <@!user_id>
            解析为 @用户 标签	<@1234000000001>

        @所有人	@everyone
            解析为 @所有人 标签，需要机器人拥有发送 @所有人 消息的权限	@everyone

        #子频道	<#channel_id>
            解析为 #子频道 标签，点击可以跳转至子频道，仅支持当前频道内的子频道	<#12345>

        表情	<emoji:id>
            解析为系统表情，具体表情id参考 Emoji 列表，仅支持type=1的系统表情，type=2的emoji表情直接按字符串填写即可	<emoji:4> 解析为得意表情
     */

    override fun invoke(qgMessage: Message, context: ReceivingMessageParser.Context): ReceivingMessageParser.Context {
        val messageList = mutableListOf<SimbotMessage.Element<*>>()

        // at and text
        val content = qgMessage.content

        messageList.add(QGContentText(content))

        if (qgMessage.mentionEveryone) {
            messageList.add(AtAll)
        }

        qgMessage.mentions.takeIf { it.isNotEmpty() }?.also {
            messageList.addAll(it.map { u -> At(u.id.ID) })
        }

        qgMessage.ark?.also {
            messageList.add(it.toMessage())
        }

        qgMessage.attachments.takeIf { it.isNotEmpty() }
            ?.map(Message.Attachment::toMessage)
            ?.also {
                messageList.addAll(it)
            }

        // TODO embeds
        // TODO reference
        // TODO mention channels?

        context.messages += messageList
        return context
    }
}
