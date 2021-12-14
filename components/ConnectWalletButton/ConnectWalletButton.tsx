/** @jsxImportSource theme-ui */
import { Wallet } from '@project-serum/anchor'
import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import React from 'react'
import { Button, Flex, Spinner, Text } from 'theme-ui'
import useCandyMachine from '../../hooks/useCandyMachine'
import useMinter from '../../hooks/useMinter'

const ConnectWalletButton = ({ mb = '0' }) => {
    const wallet = useWallet()
    const { candyMachine } = useCandyMachine()
    const { isLoading, logs, mint, status } = useMinter()

    const itemsRemaining =
        candyMachine?.data?.itemsAvailable?.toNumber() -
        candyMachine?.itemsRedeemed?.toNumber()
    return (
        <Flex
            sx={{
                alignSelf: "stretch",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: mb ? mb : 'unset',

                ".wallet-adapter-dropdown": {
                    display: "flex",
                    flex: 1,
                    justifyContent: "center",
                },

                ".wallet-adapter-button[disabled]": {
                    backgroundColor: "#141221 !important",
                    opacity: 0.7,
                },

                ".wallet-adapter-button": {
                    width: 250,
                    height: 75,
                    backgroundColor: '#FFC51F',
                    borderRadius: 10,
                    border: '3px solid #362F24',
                    color: '#473E30',
                    background: 'linear-gradient(183.33deg, rgba(255, 255, 255, 0) 5.05%, #FFC51F 5.04%)',
                },

                ".wallet-adapter-button:not([disabled]):hover": {
                    background: '#FFC51F'
                }
            }}
        >

            {!wallet?.publicKey && <WalletMultiButton sx={{
                zIndex: '2'
            }}
            >Connect Wallet</WalletMultiButton>}


            <Flex
                sx={{
                    flex: 1,
                    justifyContent: "center",
                }}
            >
                {wallet?.publicKey ? (
                    <WalletMultiButton
                        startIcon={null}
                        sx={{
                            zIndex: '2'
                        }}
                    >
                        My Wallet
                    </WalletMultiButton>
                ) : (
                    <span              >
                        &nbsp;
                    </span>
                )}
            </Flex>
        </Flex>
    )
}

export default ConnectWalletButton