// @flow
import { MAIN_NETWORK_ID, TEST_NETWORK_ID, PRIVATE_NETWORK_ID } from './constants'

export const isMainNetwork = (networkId: string) => networkId === MAIN_NETWORK_ID
export const isTestNetwork = (networkId: string) => networkId === TEST_NETWORK_ID
export const isPrivateNetwork = (networkId: string) => networkId === PRIVATE_NETWORK_ID

export const getNetworks = () => ([
  {
    id: MAIN_NETWORK_ID,
    label: 'MainNet',
    network: 'MainNet'
  },
  {
    id: TEST_NETWORK_ID,
    label: 'TestNet',
    network: 'TestNet'
  },
  {
    id: PRIVATE_NETWORK_ID,
    label: 'PrivateNet',
    network: 'PrivateNet'
  }
])

export const findNetwork = (networkId: string): NetworkItemType => {
  const networks = getNetworks()
  return networks.find(({ id }) => id === networkId) || networks[0]
}
