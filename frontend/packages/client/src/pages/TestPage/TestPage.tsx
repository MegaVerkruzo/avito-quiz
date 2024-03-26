import { AnswerVariant } from '@/components/AnswerVariant/AnswerVariant'
import { Button } from '@/components/Button/Button'
import { Header } from '@/components/Header/Header'
import { HtmlTextBlock } from '@/components/HtmlTextBlock/HtmlTextBlock'
import { PinCode } from '@/components/PinCode/PinCode'
import { ShareComponent } from '@/components/ShareComponent/ShareComponent'
import { TaskSubtitle } from '@/components/TaskSubtitle/TaskSubtitle'
import { TaskTitle } from '@/components/TaskTitle/TaskTitle'
import { Textfield } from '@/components/Textfield/Textfield'

export const TestPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Header
        currentTaskNumber={4}
        maxScore={150}
        maxTaskNumber={20}
        score={45}
      />
      <Button text="123" />
      <PinCode onSubmit={() => {}} />
      <TaskTitle title={'Task title'} />
      <TaskSubtitle text={'Subtitle after answer'} />
      <Textfield />
      <AnswerVariant />
      <ShareComponent />
      <HtmlTextBlock
        html={'<a href="https://google.com" target="_blank">Гугл</a>'}
      />
    </div>
  )
}
