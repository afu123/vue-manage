import Mock from 'mockjs'
import homeApi from './mockServeData/home.js'
import useApi from './mockServeData/user.js'
import permissionApi from './mockServeData/permission.js'

Mock.mock('/home/getData',homeApi.getStatisticalData)
Mock.mock(/user\/add/,'post',useApi.createUser)
Mock.mock(/user\/edit/,'post',useApi.updateUser)

Mock.mock(/user\/getUser/,'get',useApi.getUserList)
Mock.mock(/user\/del/,'post',useApi.deleteUser)

Mock.mock(/permission\/getMenu/,'post',permissionApi.getMenu)
