import React, { FC, Fragment } from 'react';

import { StatusBar, Image, FlatList, View } from 'react-native';
import AppLogo from '../../../assets/images/logo.png';
import RightArrowIcon from '../../../assets/images/icons/right-arrow.png';

import { ContinueWatching, BottomNavigation, Movie } from '../../elements';

import {
  Container,
  LogoWrapper,
  ContentWrapper,
  SectionTitleWrapper,
  SectionTitle,
} from './styles';
import { ContinueWatchingData, moviesData } from './home.data';

const Home: FC = () => {
  const Separator: FC = () => <View style={{ width: 12 }} />;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Container>
        <LogoWrapper>
          <Image source={AppLogo} />
        </LogoWrapper>
        <ContentWrapper
          horizontal={false}
          contentContainerStyle={{ paddingBottom: 120 }}
        >
          <SectionTitleWrapper>
            <SectionTitle>{ContinueWatchingData.sectionTitle}</SectionTitle>
            <Image source={RightArrowIcon} />
          </SectionTitleWrapper>
          <FlatList
            contentContainerStyle={{ paddingHorizontal: 16 }}
            ItemSeparatorComponent={Separator}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={ContinueWatchingData.items}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <ContinueWatching
                key={String(item.id)}
                image={item.image}
                description={item.description}
                watchPercetage={item.watchPercetage}
              />
            )}
          />
          {moviesData.map((section) => (
            <Fragment key={section.sectionTitle}>
              <SectionTitleWrapper>
                <SectionTitle>{section.sectionTitle}</SectionTitle>
                <Image source={RightArrowIcon} />
              </SectionTitleWrapper>
              <FlatList
                contentContainerStyle={{ paddingHorizontal: 16 }}
                ItemSeparatorComponent={Separator}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={section.items}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                  <Movie key={String(item)} image={item.image} />
                )}
              />
            </Fragment>
          ))}
        </ContentWrapper>
        <BottomNavigation />
      </Container>
    </>
  );
};

export default Home;
