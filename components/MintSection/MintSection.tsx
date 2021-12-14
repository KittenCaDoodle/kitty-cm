/** @jsxImportSource theme-ui */
import { useWallet } from "@solana/wallet-adapter-react"
import React from "react"
import { Button, Flex, Spinner, Text } from "theme-ui"
import Countdown from "react-countdown"

import useCandyMachine from "../../hooks/useCandyMachine"
import useMinter from "../../hooks/useMinter"
import SectionWrapper from "../Layout/SectionWrapper"
import SectionHero from "../SectionHero/SectionHero"
import SectionRoadmap from "../SectionRoadmap/SectionRoadmap"

const MintSection = () => {
  const wallet = useWallet()
  const { candyMachine } = useCandyMachine()
  const { isLoading, logs, mint, status } = useMinter()

  const goLiveDate = candyMachine?.data.goLiveDate
    ? new Date(candyMachine?.data.goLiveDate.toNumber() * 1000)
    : null

  const isMintingReady =
    goLiveDate && goLiveDate.getTime() < new Date().getTime()

  const itemsRemaining =
    candyMachine?.data?.itemsAvailable?.toNumber() -
    candyMachine?.itemsRedeemed?.toNumber()

  const endpoint =
    process.env.NEXT_PUBLIC_CONNECTION_NETWORK == "devnet"
      ? process.env.NEXT_PUBLIC_SOLANA_RPC_HOST_DEVNET
      : process.env.NEXT_PUBLIC_SOLANA_RPC_HOST_MAINNET_BETA

  return (
    <SectionWrapper as="main" flex="column">
      <SectionHero {...{ candyMachine, goLiveDate, isMintingReady, wallet, isLoading, itemsRemaining, logs, mint }} />
      <SectionRoadmap />
    </SectionWrapper>
  )
}

export default MintSection
