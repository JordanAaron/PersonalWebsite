// Tailwind doesn't allow for dynamic values to be used in classes so I've created a CardConfig to hold the colors as an alternative

export interface CardColorConfigType {
  brightGreen: { color: string }
  mediumGreen: { color: string }
  darkGreen: { color: string }
  moderateCyan: { color: string }
  pastelCyan: { color: string }
  paleCyan: { color: string }
}

export const CardColorConfig: CardColorConfigType = {
  brightGreen: {
    color: 'bg-brightGreen'
  },
  mediumGreen: {
    color: 'bg-mediumGreen'
  },
  darkGreen: {
    color: 'bg-darkGreen'
  },
  moderateCyan: {
    color: 'bg-moderateCyan'
  },
  pastelCyan: {
    color: 'bg-pastelCyan'
  },
  paleCyan: {
    color: 'bg-paleCyan'
  }
}
