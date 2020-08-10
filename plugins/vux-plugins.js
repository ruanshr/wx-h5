import Vue from 'vue'
import BusPlugin from '@vuxp/bus'
import TransferDom from '@vuxd/transfer-dom'
import WechatPlugin from '@vuxp/wechat'
import DatetimePlugin from '@vuxp/datetime'
import LoadingPlugin from '@vuxp/loading'
import ToastPlugin from '@vuxp/toast'
import AlertPlugin from '@vuxp/alert'
import ConfirmPlugin from '@vuxp/confirm'


Vue.use(DatetimePlugin)
Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.use(WechatPlugin)
Vue.use(BusPlugin)
Vue.directive('transfer-dom', TransferDom)
