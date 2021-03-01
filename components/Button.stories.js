import Button from './Button';

export const Primary = () => <Button title='Primary Button' href='#' type='primary' size='lg' />

export const Secondary = () => <Button title='Secondary Button' href='#' type='secondary' size='lg' />

export const Small = () => <Button title='Small Button' href='#' type='primary' size='sm' />

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        buttonText: {}
    }
}