import { BarPlayer } from '../BarPlayerBlock/BarPlayer';
import { VolumeBlock } from '../VolumeBlockBlock/VolumeBlock';
import styles from './player.module.css';

export function Player({ isLoading }) {
  return (
    <div className={styles.bar}>
      <div className={styles.bar__content}>
        <div className={styles.bar__player_progress}></div>
        <div className={styles.bar__player_block}>
          <BarPlayer isLoading={isLoading} />
          <VolumeBlock />
        </div>
      </div>
    </div>
  );
}
