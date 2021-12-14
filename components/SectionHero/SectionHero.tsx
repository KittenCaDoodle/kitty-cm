/** @jsxImportSource theme-ui */
import { Button, Flex, Spinner, Text } from '@theme-ui/components'
import React from 'react'
import Countdown from 'react-countdown'
import { useWindowSize } from '../../hooks/useWindowSize'
import ConnectWalletButton from '../ConnectWalletButton/ConnectWalletButton'
import { LAMPORTS_PER_SOL } from "@solana/web3.js"

const SectionHero = ({ candyMachine, goLiveDate, isMintingReady, wallet, isLoading, itemsRemaining, logs, mint }) => {
    const screenSize = useWindowSize()
    return (
        <>
            <Flex
                sx={{
                    borderRadius: ".4rem",
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: '40px'
                }}>

                <Flex
                    sx={{
                        borderRadius: ".4rem",
                        alignSelf: "flex-start",
                        placeSelf: "center",
                        flexDirection: 'column',
                        justifyContent: 'left',
                        maxWidth: '723px',

                        "@media screen and (max-width: 1080px)'": {
                            alignSelf: 'center'
                        }
                    }}
                >
                    {screenSize.width < 1080 && <div sx={{
                        width: '335px',
                        height: '332px',
                        position: 'relative'
                    }}>
                        <img sx={{
                            position: 'absolute',
                            left: '3.69%',
                            right: '1.79%',
                            top: '3.71%',
                            bottom: '2.51%',
                        }} src='/images/kitty.gif' width={300} height={310} />
                        <div sx={{
                            position: 'absolute',
                            left: '0%',
                            right: '4.48%',
                            top: '0%',
                            bottom: '3.61%',
                            border: '8px solid rgba(31, 40, 255, 0.8)',
                            borderRadius: '28px 32px 24px',
                            zIndex: '9',
                            width: '320px',
                            height: '320px'
                        }}></div>
                        <div sx={{
                            position: 'absolute',
                            left: '1.9%',
                            right: '0%',
                            top: '1.61%',
                            bottom: '0%',
                            border: '8px solid rgba(97, 28, 108, 0.8)',
                            borderRadius: '16px 32px 24px',
                            zIndex: '8',
                            width: '320px',
                            height: '320px'
                        }}></div>
                    </div>}
                    <Text
                        as="h3"
                        sx={{
                            display: "flex",
                            justifyContent: "left",
                            textAlign: "center",
                            alignItems: "center",
                            fontFamily: 'Burbank Big Regular',
                            fontWeight: '600',
                            fontSize: '42px',
                            lineHeight: '42px',
                            letterSpacing: '0.1em',

                            "@media screen and (max-width: 1080px)": {
                                marginTop: '20px'
                            }
                        }}
                    >
                        The Kitten Cadoodle Gang
                    </Text>
                    <Text
                        as="p"
                        sx={{
                            display: "flex",
                            justifyContent: "left",
                            textAlign: "left",
                            alignItems: "left",
                            fontFamily: 'Burbank Small',
                            fontStyle: 'normal',
                            fontWeight: 'normal',
                            fontSize: '26px',
                            lineHeight: '28px',
                            marginTop: '24px'
                        }}
                    >
                        A Collection of 1,111 Kitten Cadoodles.
                        Kitten Cadoodles is a community-driven collectibles NFT project. Kitten Cadoodle NFT are made up with a hundred exciting traits, faces, fur, heads, accessories, and backgrounds. Each Kitten Cadoodle is a unique non-fungible token (NFT) on the Solana Blockchain.
                    </Text>
                    <Flex
                        sx={{
                            borderRadius: ".4rem",
                            alignSelf: "flex-start",
                            placeSelf: "flex-start",
                            justifyContent: 'left',
                            margin: '50px 0 0',
                            padding: '0'
                        }}
                    >
                        <Text>
                            {candyMachine?.data ? (
                                goLiveDate && isMintingReady ? (
                                    <div sx={{
                                        fontFamily: 'Burbank Big Regular',
                                        fontStyle: 'normal',
                                        fontWeight: 600,
                                        fontSize: '34px',
                                        lineHeight: '34px',
                                        letterSpacing: '0.1em',
                                        color: '#362F24',
                                    }}>Minting started already!</div>
                                ) : goLiveDate ? (
                                    <div sx={{
                                        fontFamily: 'Burbank Big Regular',
                                        fontStyle: 'normal',
                                        fontWeight: 600,
                                        fontSize: '34px',
                                        lineHeight: '34px',
                                        letterSpacing: '0.1em',
                                        color: '#362F24',
                                    }}>Countdown: <Countdown date={goLiveDate?.getTime()} daysInHours={true} /></div>
                                ) : (
                                    <div sx={{
                                        fontFamily: 'Burbank Big Regular',
                                        fontStyle: 'normal',
                                        fontWeight: 600,
                                        fontSize: '34px',
                                        lineHeight: '34px',
                                        letterSpacing: '0.1em',
                                        color: '#362F24',
                                    }}>COMING SOON!</div>
                                )
                            ) : (
                                <div sx={{
                                    fontFamily: 'Burbank Big Regular',
                                    fontStyle: 'normal',
                                    fontWeight: 600,
                                    fontSize: '34px',
                                    lineHeight: '34px',
                                    letterSpacing: '0.1em',
                                    color: '#362F24',
                                }}>COMING SOON!</div>
                            )}
                        </Text>
                    </Flex>
                    <Flex sx={{
                        borderRadius: ".4rem",
                        alignSelf: "flex-start",
                        placeSelf: "flex-start",
                        flexDirection: 'column',
                        justifyContent: 'left',
                        margin: '20px 0 40px 0',
                        padding: '0'
                    }}
                    >
                        {screenSize.width < 1080 && <ConnectWalletButton mb='10px' />}
                        <Button
                            onClick={() => mint()}
                            disabled={!wallet.publicKey || !!isLoading || !itemsRemaining || screenSize.width < 1080}
                            title="Mint one token!"
                            sx={{
                                background: 'linear-gradient(183.33deg, rgba(255, 255, 255, 0) 5.05%, #079AEE 5.04%)',
                                borderRadius: '18px',
                                alignSelf: "flex-start",
                                display: "flex",
                                flex: 1,
                                justifyContent: "center",
                                border: '4px solid #362F24',
                                backgroundColor: '#1FAEFF',
                                zIndex: '2'
                            }}
                        >
                            <Text sx={{
                                fontSize: '44px',
                                fontFamily: 'Burbank Big Wide',
                                lineHeight: '44px',
                                padding: "28px 53px",
                                letterSpacing: '0.1em',
                                color: '#FFF7EB',
                            }}
                                variant="text.heading3">
                                {candyMachine?.data ? (
                                    itemsRemaining ?
                                        goLiveDate ?
                                            isMintingReady ?
                                                ("MINT")
                                                : ('COMING SOON!')
                                            : ("COMING SOON!")
                                        : ("Sold out!")
                                ) : (
                                    'COMING SOON!'
                                )}
                            </Text>
                        </Button>
                        <Flex
                            sx={{
                                borderRadius: ".8rem",
                                padding: ".4rem 3.2rem",
                                alignSelf: "flex-start",
                                placeSelf: "left",
                                backgroundColor: "text",
                                marginTop: '10px'
                            }}
                        >
                            <Text
                                variant="small"
                                sx={{
                                    color: "background",
                                }}
                            >
                                Mint price: 0.3 SOL
                            </Text>
                        </Flex>
                        <Text variant="small" color="primary" sx={{ marginTop: '10px' }}>
                            {`${candyMachine?.itemsRedeemed?.toNumber()} items redeemed, ${itemsRemaining} items remaining`}
                        </Text>
                    </Flex>
                    <Flex sx={{
                        borderRadius: ".4rem",
                        alignSelf: "flex-start",
                        placeSelf: "flex-start",
                        justifyContent: 'left',
                        margin: '0',
                        padding: '0',

                        "@media screen and (max-width: 1080px)": {
                            flexDirection: 'column',
                            alignItems: 'left',
                            justifyContent: 'left',
                            "button:first-of-type": {
                                marginBottom: '10px'
                            }
                        }
                    }}>
                        <Button variant="buttons.secondary" sx={{
                            zIndex: '2'
                        }}>
                            <a rel="noreferrer" target="_blank" href="https://cryptocubs.tv/">Join our Discord</a>
                        </Button>
                        <Button variant="buttons.secondary" sx={{
                            zIndex: '2',
                            "@media screen and (min-width: 1080px)": {
                                marginLeft: '62px'
                            }
                        }}>
                            <a rel="noreferrer" target="_blank" href="https://twitter.com/Kitten_CaDoodle">Follow our Twitter</a>
                        </Button>
                    </Flex>
                </Flex>
                {screenSize.width > 1080 && <div sx={{
                    width: '335px',
                    height: '332px',
                    position: 'relative'
                }}>
                    <img sx={{
                        position: 'absolute',
                        left: '3.69%',
                        right: '1.79%',
                        top: '3.71%',
                        bottom: '2.51%',
                    }} src='/images/kitty.gif' width={300} height={310} />
                    <div sx={{
                        position: 'absolute',
                        left: '0%',
                        right: '4.48%',
                        top: '0%',
                        bottom: '3.61%',
                        border: '8px solid rgba(31, 40, 255, 0.8)',
                        borderRadius: '28px 32px 24px',
                        zIndex: '9',
                        width: '320px',
                        height: '320px'
                    }}></div>
                    <div sx={{
                        position: 'absolute',
                        left: '1.9%',
                        right: '0%',
                        top: '1.61%',
                        bottom: '0%',
                        border: '8px solid rgba(97, 28, 108, 0.8)',
                        borderRadius: '16px 32px 24px',
                        zIndex: '8',
                        width: '320px',
                        height: '320px'
                    }}></div>
                </div>}
            </Flex>
            <Flex
                sx={{
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                {logs.map((log, i) => (
                    <Text key={i}>
                        <small>info</small>{" "}
                        <Text dangerouslySetInnerHTML={{ __html: log }} />
                    </Text>
                ))}
            </Flex>
        </>
    )
}

export default SectionHero