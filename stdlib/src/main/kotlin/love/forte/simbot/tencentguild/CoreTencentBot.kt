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

@file:JvmName("TencentBotFactory")
package love.forte.simbot.tencentguild

import io.ktor.client.*
import io.ktor.client.features.json.*
import io.ktor.client.features.json.serializer.*
import io.ktor.client.features.websocket.*
import io.ktor.http.*
import kotlinx.serialization.json.Json
import love.forte.simbot.ExceptionProcessor
import love.forte.simbot.tencentguild.core.internal.TencentBotImpl
import love.forte.simbot.tencentguild.core.internal.TicketImpl
import kotlin.coroutines.CoroutineContext
import kotlin.coroutines.EmptyCoroutineContext

@JvmName("newBot")
@JvmOverloads
public fun tencentBot(
    appId: String,
    appKey: String,
    token: String,
    configBlock: TencentBotConfiguration.() -> Unit = {}
): TencentBot {
    val ticket = TicketImpl(appId, appKey, token)
    val config = TencentBotConfiguration().also(configBlock)


    return TencentBotImpl(ticket, config)
}


/**
 * 对于一个Bot的配置信息。
 * 如果在配置bot之后对内容进行后续修改，可能会影响到当前bot的使用。
 */
@Suppress("MemberVisibilityCanBePrivate")
public class TencentBotConfiguration {

    /**
     * Context.
     *
     * 如果存在Job，则会被作为parentJob。
     */
    public var coroutineContext: CoroutineContext = EmptyCoroutineContext

    /**
     * 分片总数。如果为0，则会通过 [love.forte.simbot.tencentguild.api.GatewayWithShard] 来决定分片结果。
     */
    public var totalShard: Int = 0


    /**
     * 异常处理器。
     */
    public var exceptionHandler: ExceptionProcessor<Unit>? = null


    /**
     * 得到所需的所有分片。函数参数为目前全部的shared（如果 [totalShard] > 0, 那么此值为 [totalShard], 否则为通过 [love.forte.simbot.tencentguild.api.GatewayApis.Shared] 得到的建议分片数。）
     *
     * 你可以通过 [shardIterFactory] 来提供当前bot所需要连接的所有分片，且会通过 [intentsForShardFactory] 来决定每一个分片对应的 intent 值。
     *
     * 如果 [shardIterFactory] 为 null，则代表使用 `0 until [totalShard]`，即当前bot连接全部分片。
     */
    public var shardIterFactory: (Int) -> IntIterator = { (0 until it).iterator() }

    /**
     * 根据一个分片信息，得到这个分片下需要监听的事件类型。
     *
     * 默认情况下直接为全部的 intents。
     *
     * @see Intents
     */
    public var intentsForShardFactory: (Int) -> Intents = {
        EventSignals.allIntents
    }

    /**
     * 根据一个分片信息，得到这个分片下需要监听的事件类型。
     *
     * 相对于直接配置 [intentsForShardFactory], 此方法的配置中，其返回值是 [Int] 而不是 [Intents]。
     *
     * @see intentsForShardFactory
     */
    public inline fun intentsForShardFactoryAsInt(crossinline factory: (Int) -> Int) {
        intentsForShardFactory = { s -> Intents(factory(s)) }
    }

    public var clientPropertiesFactory: (Int) -> Signal.Identify.Data.Prop = {
        val os = System.getProperty("os.name", "windows")
        Signal.Identify.Data.Prop(
            os = os, browser = "BROWSER", device = "DEVICE"
        )
    }

    /**
     * 提供一个 [HttpClient] 实例用于内部的api请求和ws请求。
     *
     * 因为需要ws请求，因此你需要 `install(WebSockets)`
     *
     */
    public var httpClient: HttpClient = HttpClient() {
        install(JsonFeature) {
            serializer = KotlinxSerializer(defaultJson)
        }
        // for install web socket
        install(WebSockets)
    }

    /**
     * 请求的服务器地址。默认为 [TencentGuildApi.URL]. 即正式地址。
     */
    public var serverUrl: Url = TencentGuildApi.URL


    /**
     * 使用的数据解码器。
     *
     * 如果有必要，记得重新设置 [httpClient].
     *
     */
    public var decoder: Json = defaultJson


    public companion object {
        private val defaultJson = Json {
            isLenient = true
            ignoreUnknownKeys = true
            classDiscriminator = "\$t_"
        }
    }

}

