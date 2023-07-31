import axios from 'axios'
import {
  InterviewCriteriaEnum,
  InterviewObject,
} from '../types/InterviewNotes'
import classes from './InterviewNotesUI.module.css'
import { authHeader } from '../../../common/helpers/auth'
import DataContext from '../../../common/context/data-context'
import { useContext } from 'react'
import Button from '../../../common/components/Button/Button'

interface InterviewNotesUIProps {
  data?: InterviewObject
  _id: string
}

export default function InterviewNotesUI({
  data,
  _id,
}: InterviewNotesUIProps) {
  const { fetchData } = useContext(DataContext)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    let interviewData: any = {}

    let targets = e.target as EventTarget & { length: number } & {
      [index: number | string]: HTMLInputElement
    }
    for (let i = 0; i < targets.length; i++) {
      if (!targets[i].name || !targets[i].value) continue

      let [type, criteria] = targets[i].name.split(',')
      if (!interviewData[criteria]) interviewData[criteria] = {}
      interviewData[criteria][type] = targets[i].value
    }

    if (Object.keys(interviewData).length === 0) {
      alert('Please fill in some interview criterium')
      return
    }

    for (let criteria in interviewData) {
      if (!interviewData[criteria].rating) {
        alert(`Please enter a rating for ${criteria}`)
        targets[`rating,${criteria}`].focus()
        return
      }
    }

    if (confirm('Are you sure you want to submit the interview notes?')) {
      try {
        const hdrs = authHeader()
        if (!hdrs) return
        await axios.patch(
          'https://semicolon-registration-backend.onrender.com/participants/interview/note',
          {
            _id,
            note: interviewData,
          },
          {
            headers: hdrs,
          }
        )
        fetchData()
        alert('Interview notes saved successfully!')
      } catch (err: any) {
        alert(`Error occured: ${err.response.data.data}`)
      }
    }
  }

  return (
    <div>
      <details className={classes.details}>
        <summary className={classes.summary}>Interview Notes</summary>
        {data && (
          <h3>
            Interviewed by:{' '}
            <span className={classes.redText}>
              {data.interviewerId.username}
            </span>
          </h3>
        )}
        {data && (
          <h3>
            Interviewed on:{' '}
            <span className={classes.redText}>
              {new Date(data.date).toDateString()}
            </span>
          </h3>
        )}
        {!data && <br />}
        <form onSubmit={handleSubmit}>
          <div className={classes.tableWrapper}>
            <table className={classes.table}>
              <thead>
                <tr>
                  <th>Criteria</th>
                  <th>Rate (out of 5)</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {data ? (
                  <>
                    {Object.keys(data.interviewNotes).map((note) => (
                      <tr key={note}>
                        <td>{note}</td>
                        <td>
                          {
                            data.interviewNotes[note as InterviewCriteriaEnum]!
                              .rating
                          }
                        </td>
                        <td>
                          {
                            data.interviewNotes[note as InterviewCriteriaEnum]!
                              .note
                          }
                        </td>
                      </tr>
                    ))}
                  </>
                ) : (
                  <>
                    {Object.values(InterviewCriteriaEnum).map((criteria) => (
                      <tr key={criteria}>
                        <td>{criteria}</td>
                        <td>
                          <input
                            type="number"
                            name={`rating,${criteria}`}
                            max={5}
                            min={1}
                          />
                        </td>
                        <td>
                          <textarea name={`note,${criteria}`} />
                        </td>
                      </tr>
                    ))}
                  </>
                )}
              </tbody>
            </table>
          </div>
          {!data && (
            <Button type="submit" className={classes.submitBtn}>
              Finish Interview
            </Button>
          )}
        </form>
      </details>
    </div>
  )
}
