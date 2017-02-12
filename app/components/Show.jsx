import React from 'react'

const Show = ({ onlyIf, children }) => onlyIf ? children : null

export default Show
