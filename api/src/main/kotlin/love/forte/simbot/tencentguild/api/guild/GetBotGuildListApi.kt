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

package love.forte.simbot.tencentguild.api.guild

import io.ktor.http.*
import kotlinx.serialization.DeserializationStrategy
import kotlinx.serialization.builtins.ListSerializer
import love.forte.simbot.ID
import love.forte.simbot.tencentguild.TencentGuildInfo
import love.forte.simbot.tencentguild.api.RouteInfoBuilder
import love.forte.simbot.tencentguild.api.TencentApi


/**
 *
 * [guilds](https://bot.q.qq.com/wiki/develop/api/openapi/user/guilds.html)
 */
public class GetBotGuildListApi(
    /**
     * 读此id之前的数据，before/after 只能带一个
     */
    private val before: ID? = null,

    /**
     * 读此id之后的数据，before/after 只能带一个
     */
    private val after: ID? = null,
    /**
     * 每次拉取多少条数据	最大不超过100，默认100
     */
    private val limit: Int = 100
) : TencentApi<List<TencentGuildInfo>>() {

    override val resultDeserializer: DeserializationStrategy<out List<TencentGuildInfo>>
        get() = serializer

    override val method: HttpMethod
        get() = HttpMethod.Get

    override fun route(builder: RouteInfoBuilder) {
        builder.apiPath = route
        if (before != null) {
            builder.parametersAppender.append("before", before.toString())
        }
        if (after != null) {
            builder.parametersAppender.append("after", after.toString())
        }
        val limit = limit
        if (limit > 0) {
            builder.parametersAppender.append("limit", limit)
        }
    }

    override val body: Any?
        get() = null

    public companion object {
        private val route = listOf("users", "@me", "guilds")
        private val serializer = ListSerializer(TencentGuildInfo.serializer)
    }
}




