import React, { useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import { ChatTeardropDots } from 'phosphor-react';
import RBSheet from 'react-native-raw-bottom-sheet';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import { Options } from '../Options';
import { Success } from '../Success';
import { Form } from '../Form';

import { styles } from './styles';
import { theme } from '../../theme';
import { feedbackTypes } from '../../utils/feedbackTypes';

export type FeedbackType = keyof typeof feedbackTypes;

function Widget() {

  const bottomSheetRef = useRef<RBSheet>(null);

  function handleOpen() {
    bottomSheetRef.current?.open();
  }

  return (
    <>
      <TouchableOpacity 
        style={styles.button}
        onPress={handleOpen}
      >
        <ChatTeardropDots 
          size={24}
          weight='bold'
          color={theme.colors.text_on_brand_color}        
        />
      </TouchableOpacity>

      <RBSheet
        ref={bottomSheetRef}
        openDuration={200}
        closeOnDragDown={true}
        closeOnPressMask={false}
        animationType='none'
        customStyles={{
          wrapper: styles.wrapperRBSheet,
          container: styles.containerRBSheet,
          draggableIcon: styles.draggableIconRBSheet
        }}
      >
        {/* <Success /> */}
        <Form feedbackType='BUG'/>
        {/* <Options /> */}
      </RBSheet>
    </>
  );
}

export default gestureHandlerRootHOC(Widget);