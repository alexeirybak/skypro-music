import styles from './volumeBlock.module.css'

export function VolumeBlock() {
  return (
    <div className={styles.bar__volume_block}>
      <div className={styles.volume__content}>
        <div className={styles.volume__image}>
          <svg className={styles.volume__svg} alt='volume'>
            <use xlinkHref='img/icon/sprite.svg#icon-volume'></use>
          </svg>
        </div>
        <div className={`${styles.volume__progress} ${styles._btn}`}>
          <input className={`${styles.volume__progress_line} ${styles._btn}`} type='range' name='range' />
        </div>
      </div>
    </div>
  );
}
