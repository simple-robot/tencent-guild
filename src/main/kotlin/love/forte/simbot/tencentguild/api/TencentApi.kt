package love.forte.simbot.tencentguild.api

import io.ktor.http.*
import kotlinx.serialization.DeserializationStrategy


/**
 * 表示为一个腾讯频道的API。
 */
public interface TencentApi<out R> {

    /**
     * 得到响应值的反序列化器.
     */
    public val resultDeserializer: DeserializationStrategy<out R>


    /**
     * 此api请求方式
     */
    public val method: HttpMethod


    /**
     * 此请求对应的api路由路径以及路径参数。
     * 例如：`/guild/list`
     */
    public fun route(builder: RouteInfoBuilder)


    /**
     * 此次请求所发送的数据。为null则代表没有参数。
     */
    public val body: Any?


    /**
     * Do something after resp.
     */
    public fun post(resp: @UnsafeVariance R) {}


}


/**
 * 表示为一个腾讯频道API的返回值.
 * @author ForteScarlet
 */
public interface TencentApiResult