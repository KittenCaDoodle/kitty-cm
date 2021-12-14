/** @jsxImportSource theme-ui */
import { Flex } from '@theme-ui/components'
import React from 'react'
import { Text } from 'theme-ui'

const SectionRoadmap = () => {
    return (
        <>
            <Flex id="roadmap" sx={{
                flexDirection: 'column',
                maxWidth: '800px',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '0 auto'
            }}>
                <img sx={{ marginRight: '35px' }} src='/images/section_roadmap/sol_yarn.png' width={237} height={159} />
                <Text sx={{
                    fontFamily: 'Burbank Big Regular',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    fontSize: '46px',
                    lineHeight: '46px',
                    letterSpacing: '0.1em',
                    color: '#362F24',
                    marginTop: '80px'
                }}>
                    KITTEN CADOODLE ROAD MAP
                </Text>
                <div>
                    <div sx={{ position: 'relative' }}>
                        <Text variant="text.road_map_days" sx={{ left: '-180px', top: '135px' }}></Text>
                        <div sx={{
                            borderLeft: '6px solid #362F24',
                            height: '500px',
                            position: 'absolute',
                            left: '-45px'
                        }}></div>
                        <Flex sx={{
                            flexDirection: 'column',
                        }}>
                            <Text variant="text.road_map_normal" sx={{ marginBottom: '32px', marginTop: '70px' }}>100% of royalties from first week are donated to ASPCA</Text>
                            <Text variant="text.road_map_normal" sx={{ fontWeight: 'bold', marginBottom: '70px' }}>100% of royalties afterwards go towards $MILK</Text>
                            <Text variant="text.road_map_bold" sx={{ fontWeight: 'bold', marginBottom: '100px' }}>Use $milk to to mint Mice CaDoodles for a staking game
                            </Text>
                        </Flex>
                    </div>
                    <div sx={{ position: 'relative' }}>
                        <Text variant="text.road_map_days" sx={{ left: '-195px', top: '80px' }}></Text>
                        <div sx={{
                            borderLeft: '6px solid #362F24',
                            height: '300px',
                            position: 'absolute',
                            left: '-45px'
                        }}></div>
                        <Flex sx={{
                            flexDirection: 'column'
                        }}>
                            <Text variant="text.road_map_normal" sx={{ marginBottom: '20px' }}>Mice Cadoodles mint opens up to all Kitten Cadoodle and $milk holders. Quanity will be decided by the community! 
                            </Text>
                            <Text variant="text.road_map_normal">
                            The road map for Doodles is collaborative and will be decided by Doodle holders. With imaginative ideas, adequate resources and coordination, we believe we can bring Doodles to every vertical of popular culture! 
                            </Text>
                        </Flex>
                    
                    </div>
                </div>
            </Flex>
        </>
    )
}

export default SectionRoadmap