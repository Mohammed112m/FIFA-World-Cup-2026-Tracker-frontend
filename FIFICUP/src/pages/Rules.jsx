import { IoIosFootball  } from "react-icons/io"
import { GiCctvCamera } from "react-icons/gi"
import {IoMdTimer} from 'react-icons/io'

const Rules = () => {
  return (
    <main className="rules-section">
        <h2> New Rules in FIFA World Cup 2026 </h2>
        <div className="rules-grid">
    <div className="rule-card">
        <h3> 🌍 48 Teams </h3>
        <p>  For the first time, the tournament will include 48 national teams.</p>
      </div>

    </div>
    <div className="rule-card">
        <h3> 🏆 New Format</h3>
        <p> Teams will compete in 12 groups, with more matches than previous editions.</p>
    </div>

    <div className="rule-card">
        <h3> <IoIosFootball /> Three Host Nations </h3>
        <p>  The World Cup 2026 will be hosted by Canada, Mexico, and the United States.</p>
      </div>

      <div className="rule-card">
        <h3> <IoIosFootball /> Throw-ins and Goal Kicks</h3>
        <p> If the referee deems a throw-in or goal kick to be taking too long or being deliberately delayed, they will begin a 5-second countdown, visually signaling with their hand.If the ball is not in play at the end of the countdown, the throw-in will be awarded to the opposing team. If the goal kick is delayed, a corner kick will be awarded to the opposing team.  </p>
      </div>

      <div className="rule-card">
        <h3> <IoMdTimer /> Time Limit For Substitutions</h3>
        <p>Substituted players must leave the field of play within 10 seconds of the substitution board appearing, or from receiving the referee's signal to make a substitution if no board is present.If the player being substituted does not leave within this time limit, they must exit the last rectangle of the field, and the substitute will not be allowed to enter the field until the first stoppage after one minute of match time.</p>
      </div>

      <div className="rule-card">
        <h3> <IoMdTimer />  Treatment</h3>
        <p>When a player receives treatment on the field due to an injury, or when their injury causes play to be stopped, the player will be required to leave the field and remain off until one minute has elapsed from the moment play resumes, according to the match time.</p>
      </div>

      <div className="rule-card">
        <h3> <GiCctvCamera /> VAR Protocol Developments </h3>
        <p>Three amendments have been made. When there is clear evidence, the Video Assistant Referee (VAR) can now directly review the following situations:A red card resulting from a clearly incorrect second yellow card.Misidentification, where the referee penalizes the wrong team for a foul that results in a red or yellow card for the wrong playerThe VAR can also review a corner kick that was incorrectly awarded, provided the review is completed immediately without delaying the resumption of play.Trials have also been approved to assess tactical delays related to goalkeeper injuries and to propose options to deter such behavior.FIFA also announced another set of amendments that will come into effect on July 1st, including increasing the number of substitutes in international friendly matches to eight, with the possibility of increasing this number to ten by mutual agreement. </p>
      </div>


      </main>


  )
}

export default Rules

