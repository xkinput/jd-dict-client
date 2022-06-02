import dayjs from 'dayjs'
import isLeapYear from 'dayjs/plugin/isLeapYear'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import 'dayjs/locale/zh-cn'

dayjs.extend(isLeapYear)
dayjs.extend(LocalizedFormat)
dayjs.locale('zh-cn')

export default dayjs
