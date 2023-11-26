import styled, { css } from 'styled-components'
import { Menu } from './OptionsMenu'
import ProfileAvatar from '../../assets/images/ProfileAvatar.png'
import { type Options, type MenuForm, type OptionSelected } from '../../types'
import { useState } from 'react'

const OptionForm: React.FC<MenuForm> = ({ icon, title, titleModal, options, onChange, valueSelected, loading = false, multipleSelect = false }) => {
  const [labelSelected, setLabelSelected] = useState('')

  const onHandleClick = (value: Options) => {
    if (!multipleSelect) setLabelSelected(value.label ?? '')
    onChange(value.id)
  }

  const isSelect = (id: string) => {
    if (multipleSelect && Array.isArray(valueSelected)) {
      return valueSelected.some((tag) => id === tag)
    }
    return id === valueSelected
  }

  let modalBody = (
    <>
      {options?.length > 0 && options?.map((option: Options) => (
        <RowContainer selected={isSelect(option.id ?? '')} key={option.id} onClick={() => { onHandleClick(option) }}>
          {(option?.avatar !== undefined)
            ? (
              <img src={option.avatar ?? ProfileAvatar} alt="avatar" width={25} height={25} style={{ borderRadius: '50%' }} />
              )
            : (
              <>
                {icon}
              </>
              )
          }
          <OptionText>{option.label}</OptionText>
        </RowContainer>
      ))}
    </>
  )

  if (!loading && options.length === 0) {
    modalBody = <OptionText>Not found users</OptionText>
  }

  if (loading) {
    modalBody = <OptionText>Loading...</OptionText>
  }

  return (
    <Container>
      <OptionContainer>
        {icon}
        <OptionTitle>{!multipleSelect && labelSelected !== '' ? labelSelected : title}</OptionTitle>
        <TagMenu>
          <OptionText>{titleModal}</OptionText>
          {modalBody}
        </TagMenu>
      </OptionContainer>
    </Container>
  )
}

const Container = styled.div`
  margin: 0;
  width: 170px;
`
const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: rgba(148, 151, 154, 0.1);
  border-radius: 4px;
  padding: 0px 16px;
  column-gap: 8px;
  align-items: center;
  position: relative;
  width: 138px;
  border: none;
  cursor: pointer;
  height: 44px;
`
const TagMenu = styled(Menu)`
  width: 160px;
  max-width: 240px;
  margin-top: 40px;
  row-gap: 4px;
  top:0;
  ${OptionContainer}:hover & {
    display: flex;
  }
  background-color: ${(props) => props.theme.backgroundModal};
`

const RowContainer = styled(OptionContainer) <OptionSelected>`
  gap: 16px;
  justify-content: flex-start;
  width: 100%;
  background: transparent;
  padding: 0px 6px;
  &:hover {
    background-color: ${(props) => props.theme.backgroundDark};
  }
  ${(props) => {
    if (props.selected) {
      return css`
        background-color:  ${(props) => props.theme.primary};
      `
    }
  }}
`

const OptionTitle = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.75px;
  color: ${(props) => props.theme.white};
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
  width: auto;
  text-align: start;
`

const OptionText = styled(OptionTitle)`
  font-size: 12px;
  line-height: 12px;
  font-weight: 400;
  margin: 0px;
`
export default OptionForm
