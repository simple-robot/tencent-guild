package love.forte.simbot.tencentguild.api.guild

import io.ktor.http.*
import kotlinx.serialization.DeserializationStrategy
import love.forte.simbot.ID
import love.forte.simbot.tencentguild.TencentGuildInfo
import love.forte.simbot.tencentguild.api.RouteInfoBuilder
import love.forte.simbot.tencentguild.api.TencentApi
import love.forte.simbot.tencentguild.internal.TencentGuildInfoImpl

/**
 * 获取指定Guild
 */
public class GetGuildApi(guildId: ID) : TencentApi<TencentGuildInfo> {
    private val path = listOf("guilds", guildId.toString())

    override val resultDeserializer: DeserializationStrategy<out TencentGuildInfo>
        get() = TencentGuildInfoImpl.serializer()

    override val method: HttpMethod
        get() = HttpMethod.Get

    override fun route(builder: RouteInfoBuilder) {
        builder.apiPath = path
    }

    override val body: Any? get() = null

    public companion object {
        // private val serializer = TencentGuild.serializer()
    }
}
