/*
 * Copyright (c) 2021-2023. ForteScarlet.
 *
 * This file is part of simbot-component-tencent-guild.
 *
 * simbot-component-tencent-guild is free software: you can redistribute it and/or modify it under the terms of the GNU Lesser General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 *
 * simbot-component-tencent-guild is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License along with simbot-component-tencent-guild. If not, see <https://www.gnu.org/licenses/>.
 */

package love.forte.simbot.component.tencentguild

import kotlinx.serialization.modules.PolymorphicModuleBuilder
import kotlinx.serialization.modules.SerializersModule
import kotlinx.serialization.modules.polymorphic
import kotlinx.serialization.modules.subclass
import love.forte.simbot.*
import love.forte.simbot.component.tencentguild.message.*
import love.forte.simbot.message.Message


/**
 * QQ频道实现simbot相关组件的基本组件信息，可以用来获取组件ID、组件所用序列化器等等。
 *
 * @author ForteScarlet
 */
public class TencentGuildComponent : Component {
    override val id: String
        get() = ID_VALUE
    
    override val componentSerializersModule: SerializersModule
        get() = messageSerializersModule
    
    
    override fun toString(): String = TO_STRING_VALUE
    
    override fun equals(other: Any?): Boolean {
        return when {
            other === this -> true
            other !is TencentGuildComponent -> false
            else -> other.id == id
        }
    }
    
    override fun hashCode(): Int {
        return id.hashCode()
    }
    
    /**
     * 组件 [TencentGuildComponent] 的注册器。
     */
    public companion object Factory : ComponentFactory<TencentGuildComponent, TencentGuildComponentConfiguration> {
        /**
         * 组件的ID标识常量。
         */
        @Suppress("MemberVisibilityCanBePrivate")
        public const val ID_VALUE: String = "simbot.tencentguild"
        
        internal const val TO_STRING_VALUE: String = "TencentGuildComponent(id=$ID_VALUE)"
        
        /**
         * [ID_VALUE] 的 [ID] 类型。
         */
        @Deprecated("Unused")
        public val componentID: CharSequenceID = ID_VALUE.ID
        
        /**
         * 作为注册器时的标识。
         */
        override val key: Attribute<TencentGuildComponent> = attribute(ID_VALUE)
        
        /**
         * 注册配置函数。
         */
        override suspend fun create(configurator: TencentGuildComponentConfiguration.() -> Unit): TencentGuildComponent {
            TencentGuildComponentConfiguration.configurator()
            
            return TencentGuildComponent()
        }
        
        /**
         * QQ频道组件所使用到的特殊消息类型序列化信息。
         */
        @JvmStatic
        public val messageSerializersModule: SerializersModule = SerializersModule {
            fun PolymorphicModuleBuilder<TcgMessageElement<*>>.subclass0() {
                subclass(TcgArk.serializer())
                subclass(TcgMentionChannel.serializer())
                subclass(TcgAttachmentMessage.serializer())
                subclass(TcgReplyTo.serializer())
            }
            
            polymorphic(TcgMessageElement::class) {
                subclass0()
            }
            
            polymorphic(Message.Element::class) {
                subclass0()
            }
        }
        
        
    }
    
}


/**
 * 用于 [TencentGuildComponent] 组件注册时的配置类信息。
 *
 * _Note: 目前 [TencentGuildComponent] 暂无可配置内容。_
 *
 */
public object TencentGuildComponentConfiguration

/**
 * [TencentGuildComponent] 的注册器工厂，用于支持组件的自动加载。
 *
 */
public class TencentGuildComponentRegistrarFactory :
    ComponentAutoRegistrarFactory<TencentGuildComponent, TencentGuildComponentConfiguration> {
    override val registrar: TencentGuildComponent.Factory
        get() = TencentGuildComponent
}






