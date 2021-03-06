// @flow
import { openExternal } from './electron'
import { EXPLORERS } from '../core/constants'
import { isMainNetwork, isTestNetwork } from '../core/networks'

export const getExplorerBaseURL = (networkId: string, explorer: ExplorerType) => {
  let baseURL
  if (explorer === EXPLORERS.NEO_TRACKER) {
    if (isMainNetwork(networkId)) {
      baseURL = 'https://neotracker.io'
    } else if (isTestNetwork(networkId)) {
      baseURL = 'https://testnet.neotracker.io'
    } else { // isPrivateNetwork
      baseURL = 'http://192.168.1.148:9999' // not available!
    }
  } else if (explorer === EXPLORERS.NEO_SCAN) {
    if (isMainNetwork(networkId)) {
      baseURL = 'https://neoscan.io'
    } else if (isTestNetwork(networkId)) {
      baseURL = 'https://neoscan-testnet.io'
    } else { // isPrivateNetwork
      baseURL = 'http://192.168.1.148:4000'
    }
  } else {
    if (isMainNetwork(networkId)) {
      baseURL = 'http://antcha.in'
    } else {
      baseURL = 'http://testnet.antcha.in'
    }
  }
  return baseURL
}

export const getExplorerTxLink = (networkId: string, explorer: ExplorerType, txId: string) => {
  const baseURL = getExplorerBaseURL(networkId, explorer)

  if (explorer === EXPLORERS.NEO_TRACKER) {
    return `${baseURL}/tx/${txId}`
  } else if (explorer === EXPLORERS.NEO_SCAN) {
    return `${baseURL}/transaction/${txId}`
  } else {
    return `${baseURL}/tx/hash/${txId}`
  }
}

export const getExplorerAddressLink = (networkId: string, explorer: ExplorerType, address: string) => {
  const baseURL = getExplorerBaseURL(networkId, explorer)

  if (explorer === EXPLORERS.NEO_TRACKER) {
    return `${baseURL}/address/${address}`
  } else if (explorer === EXPLORERS.NEO_SCAN) {
    return `${baseURL}/address/${address}/1`
  } else if (explorer === EXPLORERS.NEO_VERSE) {
    return `${baseURL}/addresses/${address}`
  } else {
    return `${baseURL}/address/info/${address}`
  }
}

export const getExplorerAssetLink = (networkId: string, explorer: ExplorerType, assetId: string) => {
  const baseURL = getExplorerBaseURL(networkId, explorer)

  if (explorer === EXPLORERS.NEO_TRACKER) {
    return `${baseURL}/asset/${assetId}`
  } else if (explorer === EXPLORERS.NEO_SCAN) {
    return `${baseURL}/asset/${assetId}`
  } else if (explorer === EXPLORERS.NEO_VERSE) {
    return `${baseURL}/assets/${assetId}`
  } else {
    return `${baseURL}/asset/hash/${assetId}`
  }
}

export const openExplorerTx = (networkId: string, explorer: ExplorerType, txId: string) =>
  openExternal(getExplorerTxLink(networkId, explorer, txId))

export const openExplorerAddress = (networkId: string, explorer: ExplorerType, address: string) =>
  openExternal(getExplorerAddressLink(networkId, explorer, address))

export const openExplorerAsset = (networkId: string, explorer: ExplorerType, assetId: string) =>
  openExternal(getExplorerAssetLink(networkId, explorer, assetId))
