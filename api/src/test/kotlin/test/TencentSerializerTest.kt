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

package test

import kotlinx.serialization.decodeFromString
import kotlinx.serialization.json.Json
import kotlinx.serialization.modules.plus
import love.forte.simbot.tencentguild.TencentGuildApi
import love.forte.simbot.tencentguild.TencentMemberInfo
import love.forte.simbot.tencentguild.api.role.GuildRoleList
import kotlin.test.Test

/**
 *
 * @author ForteScarlet
 */

class TencentSerializerTest {
    private val j = Json {
        serializersModule += TencentGuildApi.serializersModule
        classDiscriminator = "_t_"
        ignoreUnknownKeys = true
        isLenient = true
    }

    @Test
    fun serializer1() {
        val memberJsonStr = """
            {
            "guild_id": 1145141919810,
            "user": {
              "id": 1149159218666,
              "username": "ForteScarlet",
              "avatar": "https://123.jpg",
              "bot": true
            },
            "nick": "ForteScarlet",
            "roles": [1, 55, 67, 255],
            "joined_at": "2021-01-01T11:11:11.111Z"
            }
        """.trimIndent()

        val member: TencentMemberInfo = j.decodeFromString(TencentMemberInfo.serializer, memberJsonStr)
        println(member)
        println(member::class)
    }

    @Test
    fun serializer2() {
        val rolesJsonStr = """
            {
              "guild_id": 123123123123,
              "roles": [
              {
                "id": 1,
                "name": "管理员",
                "color": 112233,
                "hoist": 0,
                "number": 500,
                "member_limit": 9999
              },
              {
                "id": 4,
                "name": "管理员2",
                "color": 112233,
                "hoist": 0,
                "number": 500,
                "member_limit": 9999  
              }
          ],
          "role_num_limit": 5
            }
        """.trimIndent()

        val list = j.decodeFromString<GuildRoleList>(rolesJsonStr)
        println(list)
        for (role in list.roles) {
            println(role)
        }

    }
}