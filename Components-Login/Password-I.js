import * as React from 'react';
import { View } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';

const Password = () => {
  const [text, setText] = React.useState('');

   const onChangeText = text => setText(text);

  const hasErrors = () => {
    return !text.includes('');
  };

 return (
    <View>
      <TextInput 
      mode="outlined"
      placeholder="password"
      right={<TextInput.Icon icon="eye"/>}
      label="Password" value={text} onChangeText={onChangeText} />
      <HelperText type="error" visible={hasErrors()}>
        Password invalid!
      </HelperText>
    </View>
  );
};

export default Password;