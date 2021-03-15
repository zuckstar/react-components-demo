import React from 'react';
import { fireEvent, render } from '@testing-library/react'
import Alert, { AlertProps, AlertType } from './alert'

const defaultProps = {
  title: 'Nice',
  message: 'Hello'
}

describe('test alert component', () => {
  it('should render the correct default alert', 
  () => {
    const wrapper = render(<Alert {...defaultProps} />)
    const element = wrapper.getAllByTestId('alert')
    expect(element).toBeTruthy()
  })
})
