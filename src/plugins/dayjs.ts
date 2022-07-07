import dayjs from 'dayjs'
import isLeapYear from 'dayjs/plugin/isLeapYear'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'

dayjs.extend(isLeapYear)
dayjs.extend(LocalizedFormat)
dayjs.extend(relativeTime)
dayjs.locale('zh-cn')

export default dayjs
