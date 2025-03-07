package sec01.exam03;

public class SmartTelevistion implements RemoteControl , Searchable{
		private int volume;
		public void turnOn() {
			System.out.println("티비를 켭니다");
		}
		public void turnOff() {
			System.out.println("티비를 끕니다");
		}
		public void setVolume(int volume) {
			if(volume > RemoteControl.MAX_VOLUME) {
				this.volume = RemoteControl.MAX_VOLUME;
			}else if(volume < RemoteControl.MIN_VOLUME) {
				this.volume = RemoteControl.MIN_VOLUME;
			}else {
				this.volume = volume;
			}
			System.out.println("현재 티비 볼륭 : " + this.volume);
		}
		public void search(String url) {
			System.out.println(url + "을 검색합니다.");
		}
}
