import type { DropInfo, StartJsonBoss, Stat } from 'api'
import type { Quest } from 'myStorage'
import request from './request'

// 更新引继码
export function updateCode(data: { code: string }) {
  return request<{ code: string }>('/ext/code', {
    method: 'post',
    body: JSON.stringify(data),
  })
}

// 发送掉落信息
export function sendDropInfo(data: DropInfo) {
  return request('/ext/drop', {
    method: 'post',
    body: JSON.stringify(data),
  })
}

// 批量发送掉落信息
export function sendMultiDropInfo(data: DropInfo[]) {
  return request('/ext/multiDrop', {
    method: 'post',
    body: JSON.stringify(data),
  })
}

// 发送startJson中的boss信息
export function sendBossInfo(data: StartJsonBoss) {
  return request('/ext/startJson', {
    method: 'post',
    body: JSON.stringify(data),
  })
}

// 获取副本信息
export function listQuest() {
  return request<{ data: Omit<Quest, 'visible'>[] }>('/ext/quest', {
    method: 'get',
  })
}

// 获取掉落统计信息
export function listDrop(questIds: string[]) {
  return request<{ data: Stat[] }>('/ext/stat', {
    method: 'post',
    body: JSON.stringify(questIds),
  })
}

// 上传配置
export function uploadBuild(data: any) {
  return request('/ext/build', {
    method: 'post',
    body: JSON.stringify(data),
  })
}
