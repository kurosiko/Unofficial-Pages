  import Banner from '@/components/sub/feng/Banner'
import Footer from '@/components/sub/feng/Footer'
import Header from '@/components/sub/feng/Header'
import Info from '@/components/sub/feng/Info'
import Sky from '@/components/sub/feng/Sky'
import SlideShow from '@/components/sub/feng/SlideShow'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/brand/_layout/feng/')({
  component: RouteComponent,
})

function RouteComponent() {

  return (
    <>
      <div
        className="w-screen"
        style={{
          background: 'repeating-linear-gradient(0deg, rgb(255, 204, 153,0.5) 0px, rgb(255, 204, 153,0.5) 2px, #fffefb 2px, #fffefb 4px)',
        }}
      >
        <main className='mx-auto w-[765px] shadow-xl bg-white'>
          <Header/>
          <SlideShow/>
          <div className='flex flex-row'>
            <div className='flex-1 flex flex-col p-4 gap-2 *:rounded-md'>
              <Banner/>
            </div>
            <div className='flex-4'>
              <div
                className='text-center [&>*>strong]:text-red-600 [&>*>strong]:font-bold text-[14px] items-center justify-center'
              >
                <a href='https://feng-soft.booth.pm/'>
                  <img
                    src='http://www.feng.jp/images/officialbooth_b.png'
                    alt='feng_official_booth_opend'
                    className='px-1 py-4'
                  />
                </a>
                <p><strong>feng20周年記念！　公式BOOTHをオープンいたしました。</strong></p>
                <p>懐かしの抱き枕が最新のフレス社最新の抱き枕カバー生地<strong>「アクアヴェール」</strong>で再販中！</p>
                <p>思い出のあの抱き枕カバーを<strong>より滑らか</strong>で<strong>きめ細やかな</strong>最新の生地でお迎えしませんか？</p>
                <p><strong>こんなに凄い! → </strong>
                  <a
                    href='https://fules.jp/brandnewtricot-info/aquaveil-info/%E3%82%A2%E3%82%AF%E3%82%A2%E3%83%B4%E3%82%A7%E3%83%BC%E3%83%AB%E3%81%A8%E3%82%A2%E3%82%AF%E3%82%A2%E3%83%97%E3%83%AC%E3%83%9F%E3%82%A2%E3%81%AE%E9%81%95%E3%81%84%E3%81%A3%E3%81%A6%EF%BC%9F/'
                    className='text-blue-700 underline'
                  >
                    アクアヴェールとアクアプレミアムの違いって？
                  </a>
                </p>
                <a href='http://fengva.com/'>
                  <img
                    src='http://www.feng.jp/images/vocalalbum_b.png'
                    alt='feng_official_booth_opend'
                    className='px-1 py-4'
                  />
                </a>
                <p><strong>fengコンプリートボーカルアルバム大好評発売中！</strong></p>
                <p>fengデビュー作「knot～絆の魔法～」から最新作「夢と色でできている」まで</p>
                <p>数多くのボーカル曲をリマスタリングして1枚にまとめた夢のアルバムです！</p>
                <a href='http://www.feng.jp/seiiki/imouto/subhvkekka.html'>
                  <img
                    src='http://www.feng.jp/images/seiiki_subhvote.png'
                    alt='charactor_vote'
                    className='px-1 py-4'
                  />
                </a>
                <p><strong>セイイキシリーズサブヒロイン人気投票終了！</strong></p>
                <p>たくさんのご投票、ありがとうございました！　優勝したのは…!?</p>
                <p>※上記バナーから結果とコメント抜粋、優勝キャラクターのＳＳがご覧いただけます</p>
                <Sky/>
                <Info/>
              </div>
            </div>
          </div>
        </main>
        <Footer/>
      </div>
    </>
  )
}
