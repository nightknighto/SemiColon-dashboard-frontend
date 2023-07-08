import classes from "./InterviewNotesUI.module.css";

const criterias = [
    'Commitment',
    'Teamwork',
    'Time Management',
    'Communication Skills',
    'Flexibility',
    'Ethics',
    'Leadership',
    'Stress Management',
    'Problem Solving',
    'Eager to learn',
] as const;

interface InterviewNotesUIProps {
    data: any;
}

export default function InterviewNotesUI({ data }: InterviewNotesUIProps) {

    const present = true;

    return (
        <div>
            <details className={classes.details}>
                <summary className={classes.summary}>Interview Notes</summary>
                <h3>Interviewed by: <span className={classes.redText}>Ahmed Atwa</span></h3>
                <h3>Interviewed on: <span className={classes.redText}>{new Date().toDateString()}</span></h3>
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
                            {
                                criterias.map(criteria => (
                                    <tr key={criteria}>
                                        <td>{criteria}</td>
                                        {
                                            present ?
                                                <>
                                                    <td>4</td>
                                                    <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus alias aliquam, at sit dignissimos aut tenetur cum sint totam natus. Deserunt, facere. Tempora nobis pariatur cupiditate quaerat architecto vel voluptates.</td>
                                                </>
                                            :
                                                <>
                                                    <td><input type="number" max={5} min={1} /></td>
                                                    <td><textarea /></td>
                                                </>
                                        }
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </details>
        </div>
    )
}