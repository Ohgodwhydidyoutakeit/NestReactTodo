


import { FC } from 'react'
import './EditArea.component.scss'
import { t } from 'i18next'

export const EditArea: FC = () => {
    return (
        <div className='edit-area-container'>
            {t("edit")}
        </div>
    )
}