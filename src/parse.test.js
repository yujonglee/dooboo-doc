import parse from './parse'

describe('parse', () => {
    it('parses interface', () => {
        expect(parse()).toEqual([
            {
                name: 'Styles',
                properties: [
                    'containerStyle',
                    'onElementContainerStyle',
                    'offElementContainerStyle',
                    'circleStyle',
                    'buttonStyle',
                    'circleColorOff',
                    'circleColorOn',
                    'backgroundColorOn',
                    'backgroundColorOff'
                ]
            },
            {
                name: 'Props',
                properties: [
                    'testID',    
                    'isOn',
                    'theme', 
                    'style',
                    'styles',  
                    'duration',
                    'onElement', 
                    'offElement',
                    'onPress'
                ]
            }
        ])
    })
})