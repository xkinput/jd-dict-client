import { NavItem } from '~/types/menu'

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: '首页',
    to: '/',
  },
  // {
  //   label: '词组',
  //   children: [
  //     {
  //       label: '添加',
  //       subLabel: '提交添加一个词组',
  //       to: '/dict/add',
  //     },
  //     {
  //       label: '修改',
  //       subLabel: '提交修改一个词组',
  //       to: '/dict/edit',
  //     },
  //   ],
  // },
  {
    label: '关于',
    to: '/about',
  },
]
