export function BowlTouch({ message }: { message: string }) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            🎳 볼터치 공식 규칙
          </h1>
        </div>

        {/* Rules Container */}
        <div className="space-y-6">
          {/* Rule 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              1. 정기전 참석 의무
            </h2>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="font-semibold text-blue-600 dark:text-blue-400">매월 정기전 4회 중 최소 1회 이상 필참</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>무단 불참 시 즉시 강퇴 및 재입장 불가</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>개인 사정·병가 등의 사유는 사전 고지 시 예외 인정</span>
              </li>
            </ul>
          </div>

          {/* Rule 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              2. 언쟁·논쟁·싸움 제재
            </h2>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>경중에 따라 경고 1회 부여 또는 즉시 강퇴</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>방장 판단에 따라 관련자 전원 강퇴 가능</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span className="font-semibold">경고를 받은 후 유사한 문제 재발 시 즉시 영구 강퇴</span>
              </li>
            </ul>
          </div>

          {/* Rule 3 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              3. 티칭(지도) 규정
            </h2>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>티칭 필요 시 1:1 요청 + 운영진 사전 신고 필수</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>정기전 중 티칭은 뒤 순서에게 방해되지 않는 선에서 간단 지도만 가능</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">★</span>
                <span className="font-semibold text-yellow-600 dark:text-yellow-400">
                  요청 없는 티칭·조언 절대 금지
                </span>
                <span className="text-yellow-500 ml-2">★</span>
              </li>
            </ul>
          </div>

          {/* Rule 4 */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl shadow-lg p-6 border-2 border-orange-300 dark:border-orange-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="mr-2">🔥</span>
              4. 회비 및 사이드비 규정
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2 flex items-center">
                  <span className="text-green-500 mr-2">✔️</span>
                  팀 패배비 폐지
                </h3>
                <p className="text-gray-700 dark:text-gray-300 ml-6">
                  기존 팀 패배 인당 1,000원은 25년11월부터 종료
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2 flex items-center">
                  <span className="text-green-500 mr-2">✔️</span>
                  정기전 통합 회비
                </h3>
                <ul className="space-y-1 text-gray-700 dark:text-gray-300 ml-6">
                  <li>• 정기전 1회당 <span className="font-bold text-orange-600 dark:text-orange-400">13,500원</span></li>
                  <li className="ml-4">- 게임비: 10,500원</li>
                  <li className="ml-4">- 사이드비: 3,000원</li>
                  <li>• 사이드비는 매 정기전 시 팀 또는 개인 시상으로 사용</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Rule 5 */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl shadow-lg p-6 border-2 border-green-300 dark:border-green-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="mr-2">💵</span>
              5. 회비 규정 (2026년 1월부터 적용, 신입 규정 포함)
            </h2>

            <div className="space-y-4">
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4">
                <p className="text-gray-700 dark:text-gray-300">
                  2026년 1월부터는 정기전 회비와 별도로 인당 <span className="font-bold text-green-600 dark:text-green-400">5,000원</span> 회비 추가 징수
                </p>
                <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>• 회비 납부일: 매월 1일</li>
                  <li>• 회비 입금 계좌: <span className="font-mono font-semibold">79421146786 카카오뱅크 한상현</span></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2 flex items-center">
                  <span className="text-green-500 mr-2">✔️</span>
                  신입 회원 회비 적용 규정
                </h3>
                <ul className="space-y-1 text-gray-700 dark:text-gray-300 ml-6">
                  <li>• 신입 회원은 입장한 다음 달부터 회비가 발생한다.</li>
                  <li>• 단, 당월 정기전 모두 종료 후 입장한 경우</li>
                  <li className="ml-4">→ 바로 다음 달은 면제,</li>
                  <li className="ml-4">→ 그 다음달부터 회비 납부 시작.</li>
                  <li className="ml-4 text-sm text-gray-600 dark:text-gray-400">
                    (예: 1월 31일 입장 → 2월 면제 → 3월 1일부터 회비 시작)
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2 flex items-center">
                  <span className="text-green-500 mr-2">✔️</span>
                  회비 사용처
                </h3>
                <ul className="space-y-1 text-gray-700 dark:text-gray-300 ml-6">
                  <li>• 이벤트 상품 비용</li>
                  <li>• 모든 회비 사용 내역은 공개 원칙</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2 flex items-center">
                  <span className="text-green-500 mr-2">✔️</span>
                  유령 회비
                </h3>
                <p className="text-gray-700 dark:text-gray-300 ml-6">
                  장기출장, 입원, 부상으로 3개월이상 부득이한 불참시 총무에게 승인 받은 후 회비는 잠정적 보류
                </p>
              </div>
            </div>
          </div>

          {/* Rule 6 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              6. 에버(평균) 규정
            </h2>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>에버는 매년 1월 소프트 리셋 방식으로 초기화</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>기존 기록은 완전 삭제가 아닌 일부 반영 또는 초기화 형태</span>
              </li>
            </ul>
          </div>

          {/* Rule 7 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              7. 개인 사이드 & 경기 규칙
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                  ▷ 개인 사이드
                </h3>
                <ul className="space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                  <li>• 사이드 1등 시 다음 게임 -20점 적용</li>
                  <li>• 연속 1등 시 최대 -40점까지 누적 적용</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                  ▷ 경기 규칙
                </h3>
                <ul className="space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                  <li>• 각 팀 마지막 투구 전 자리 이동 금지</li>
                  <li className="ml-4 text-sm text-gray-600 dark:text-gray-400">
                    (적발 시 경고 1회 → 이후 등짝 스매싱🖐️)
                  </li>
                  <li>• 정기전 시작 전 신입 소개 및 사진 촬영 진행</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Rule 8 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              8. 뒷풀이 규정
            </h2>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>고정 뒷풀이는 없음</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>정기전 종료 후 참여 희망자끼리 자유 참여</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div>
                  <span className="font-semibold">정산 방식:</span>
                  <ul className="mt-1 ml-4 space-y-1">
                    <li>- 방장·총무 결제 후 정산</li>
                    <li>- 또는 테이블별 개별 계산</li>
                    <li>- 술 마신 사람 / 안 마신 사람 구분 정산 원칙</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>모든 회원은 위 규칙을 숙지하고 준수해야 합니다.</p>
        </div>
      </div>
    </main>
  );
}
