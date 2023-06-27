import styled from 'styled-components/native'

export const KeyboardView= styled.KeyboardAvoidingView`
flex: 1;
align-items: center;
justify-content: center;
`
export const Container = styled.View`
justify-content: center;
align-items: center;
padding-bottom 26px;
width: 90%;
`

export const Title = styled.Text `
color: #000;
font-size: 20px;
font-weight: 700;
margin-bottom: 30px;
`

export const Input = styled.TextInput`
border: 2px solid #808080;
margin-bottom: 30px;
padding: 15px; 20px;
color: #000;
font-size: 20px;
border-radius: 20px;
width: 90%;
`

export const ButtonSubmit = styled.TouchableOpacity`
background-color: #4E54EF;
width: 60%;
border-radius: 20px;
padding: 15px 20px;
align-items: center;
`

export const TextButton = styled.Text`
color: #fff;
font-size: 20px;
font-weight: bold;
`

