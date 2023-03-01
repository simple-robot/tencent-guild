/*
 * Copyright (c) 2022-2023. ForteScarlet.
 *
 * This file is part of simbot-component-tencent-guild.
 *
 * simbot-component-tencent-guild is free software: you can redistribute it and/or modify it under the terms of the GNU Lesser General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 *
 * simbot-component-tencent-guild is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License along with simbot-component-tencent-guild. If not, see <https://www.gnu.org/licenses/>.
 */

package love.forte.simbot.component.tencentguild.internal

import kotlinx.coroutines.flow.FlowCollector


public suspend inline fun <reified R> FlowCollector<R>.flowForLimiter(
    skip: Int,
    limit: Int,
    maxIfZero: Boolean = true,
    listGetter: () -> List<R>,
) {

    var remainingSkip = skip
    var remainingAmount = if (maxIfZero && limit <= 0) Int.MAX_VALUE else limit

    while (remainingAmount > 0) {
        val list = listGetter()
        if (list.isEmpty()) {
            break
        }
        if (remainingSkip > 0) {
            val size = list.size
            if (size == remainingSkip) {
                remainingSkip = 0
                continue
            }
            if (size < remainingSkip) {
                remainingSkip -= size
                continue
            }
            // size > skip
            // 10 - 2 = 8
            // (0, 1)~ 2 .. 10
            val lastSkip = remainingSkip
            // val last = size - lastSkip
            remainingSkip = 0

            for (i in lastSkip until size) {
                emit(list[i])
                remainingAmount -= 1
                if (remainingAmount <= 0) {
                    break
                }
            }

        } else {
            for (i in list) {
                emit(i)
                remainingAmount -= 1
                if (remainingAmount <= 0) {
                    break
                }
            }
        }

    }
}


public suspend inline fun <reified R> SequenceScope<R>.sequenceForLimiter(
    skip: Int,
    limit: Int,
    maxIfZero: Boolean = true,
    listGetter: () -> List<R>,
) {
    var remainingSkip = skip
    var remainingAmount = if (maxIfZero && limit <= 0) Int.MAX_VALUE else limit

    while (remainingAmount > 0) {
        val list = listGetter()
        if (list.isEmpty()) {
            break
        }
        if (remainingSkip > 0) {
            val size = list.size
            if (size == remainingSkip) {
                remainingSkip = 0
                continue
            }
            if (size < remainingSkip) {
                remainingSkip -= size
                continue
            }
            // size > skip
            // 10 - 2 = 8
            // (0, 1)~ 2 .. 10
            val lastSkip = remainingSkip
            // val last = size - lastSkip
            remainingSkip = 0

            for (i in lastSkip until size) {
                yield(list[i])
                remainingAmount -= 1
                if (remainingAmount <= 0) {
                    break
                }
            }

        } else {
            for (i in list) {
                yield(i)
                remainingAmount -= 1
                if (remainingAmount <= 0) {
                    break
                }
            }
        }

    }
}



