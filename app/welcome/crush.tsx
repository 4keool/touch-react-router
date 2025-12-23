export function Crush() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 flex items-center justify-center">
                        <span className="mr-3">🎳</span>
                        크러쉬 볼링 동호회 회칙 & 규정
                    </h1>
                </div>

                {/* Rules Container */}
                <div className="space-y-6">
                    {/* Rule 1: Purpose */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            1. 목적
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            본 크러쉬 볼링클럽 은 볼링을 사랑하는 회원들이 모여 친목을 도모하고, 실력 향상과 건전한 여가 생활을 추구함을 목적으로 한다.
                        </p>
                    </div>

                    {/* Rule 2: Membership & Duties */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            2. 회원 자격 및 의무
                        </h2>
                        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                            <li className="flex items-start">
                                <span className="font-bold mr-2">1.</span>
                                <span>본 동호회는 <span className="font-bold">정회원</span>으로만 구성</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-bold mr-2">2.</span>
                                <span>정회원은 회칙을 준수하고, 정해진 회비를 납부한 자</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-bold mr-2">3.</span>
                                <span>활동이 장기간 없는 회원은 운영진 협의를 통해 정리</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-bold mr-2">4.</span>
                                <span>타인을 존중하고 예의를 지킬 것</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-bold mr-2">5.</span>
                                <span>클럽 이미지 손상 행동 금지</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-bold mr-2">6.</span>
                                <span>모임 참여 시 적극적인 협력</span>
                            </li>
                        </ul>
                    </div>

                    {/* Rule 3: Structure */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            3. 운영 구조
                        </h2>
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                            <li className="flex items-center">
                                <span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">회장</span>
                                <span>전체 운영 총괄</span>
                            </li>
                            <li className="flex items-center">
                                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-900">총무</span>
                                <span>회비 관리 및 정산</span>
                            </li>
                            <li className="flex items-center">
                                <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">현장관리</span>
                                <span>정기전 운영</span>
                            </li>
                        </ul>
                    </div>

                    {/* Rule 4: Regular Meetings */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            4. 정기 모임
                        </h2>
                        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                            <li className="flex items-start">
                                <span className="font-bold mr-2">1.</span>
                                <span><span className="font-semibold">정기 모임:</span> 1, 3주 화요일 8시 30분</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-bold mr-2">2.</span>
                                <span><span className="font-semibold">장소:</span> 수진볼링장 7층</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-bold mr-2">3.</span>
                                <span><span className="font-semibold">정기전 비용:</span> 10,500원</span>
                            </li>
                        </ul>
                    </div>

                    {/* Rule 5: Dues Regulations */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            5. 회비 규정
                        </h2>
                        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                            <li className="flex items-start">
                                <span className="font-bold mr-2">1.</span>
                                <span><span className="font-semibold">정기 회비:</span> 월 15,000원</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-bold mr-2">2.</span>
                                <span><span className="font-semibold">납부일:</span> 매월 1일</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-bold mr-2">3.</span>
                                <span><span className="font-semibold">사용처:</span> 정기전 이벤트 및 운영비</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-bold mr-2">4.</span>
                                <span>정산은 매월 말 투명하게 공개</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-bold mr-2">5.</span>
                                <span>상주리그 우승 상금(승패상금)은 전액 클럽 회비로 귀속</span>
                            </li>
                        </ul>
                    </div>

                    {/* Rule 6: Dues Usage Plan */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            6. 회비 사용 계획
                        </h2>
                        <div className="space-y-4 text-gray-700 dark:text-gray-300">
                            <div>
                                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">1. 정기전 이벤트 운영</h3>
                                <ul className="list-disc list-inside ml-2 space-y-1 text-sm">
                                    <li>매월 진행되는 정기전에서 소소한 상품/미니게임/랜덤 이벤트 등에 회비 일부 사용</li>
                                    <li>참여 동기 부여 및 동호회 분위기 활성화 목적</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">2. 상주리그 팀 지원금</h3>
                                <ul className="list-disc list-inside ml-2 space-y-1 text-sm">
                                    <li>상주리그 시 5,000원의 상주지원금 지급</li>
                                    <li>출전일 기준 음료 1인 2,000원 추가 제공 (총 6,000원 지원)</li>
                                    <li>팀 운영 부담 완화 및 상주리그 지속 참여 유도</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">3. 연 1회 연말 이벤트 게임</h3>
                                <ul className="list-disc list-inside ml-2 space-y-1 text-sm">
                                    <li>매년 12월 진행되는 연말 이벤트 게임에 회비 사용</li>
                                    <li>참가자 전원 참여 가능한 특별 게임 운영</li>
                                    <li>단, 전체 볼 지급 같은 고비용 선물은 제외하고, 이벤트 중심으로 운영</li>
                                    <li>연말 이벤트 참가비 납부 예정</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">4. 출석률 베네핏 제도(꾸준한 활동 장려 목적을 위해 진행)</h3>
                                <div className="ml-2 text-sm space-y-2 mt-2">
                                    <p>출석률 70% 이상 달성 회원에게 베네핏 제공 <span className="font-medium text-red-500">(6개월 기준 12회 중 9회이상 참여)</span></p>
                                    <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg border border-gray-100 dark:border-gray-600">
                                        <p className="font-semibold mb-2">베네핏 (택1): <br /><span className="text-blue-600 dark:text-blue-400">정기전 시 1회 음료 지원 + </span></p>
                                        <ul className="list-disc list-inside ml-2 space-y-1">
                                            <li>연말 이벤트 참가비 할인</li>
                                            <li>정기전비 1회 지원</li>
                                            <li>볼링 용품 set 지급</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Rule 7: Resident League */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            7. 상주 리그
                        </h2>
                        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                            <li className="flex items-start">
                                <span className="font-bold mr-2">1.</span>
                                <span>상주리그 대회는 클럽 대표로 참가한다는 책임감을 갖는다.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-bold mr-2">2.</span>
                                <span>선수 선발 방식은 운영진 공지에 따른다.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-bold mr-2">3.</span>
                                <span>경기력, 출석률, 태도 등을 종합적으로 고려하여 선수 선발</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-bold mr-2">4.</span>
                                <span>팀 분위기를 해치는 행동이 있을 경우 선수 자격이 제한</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-bold mr-2">5.</span>
                                <span>순위 상금(9위까지)은 상주 선수 개인에게 지급 (참여율에 따라 비율로 분배)</span>
                            </li>
                        </ul>
                    </div>

                    {/* Rule 8: Fine Regulations */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            8. 벌금 규정
                        </h2>
                        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                            <li className="flex items-start">
                                <span className="font-bold mr-2">1.</span>
                                <span>정기전 무단 불참 – 10,000원</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-bold mr-2">2.</span>
                                <span>정기전 지각 – 3,000원 (단, 미리 한시간 전 공지 시 제외)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-bold mr-2">3.</span>
                                <span>유니폼 미 착용시 – 5,000원</span>
                            </li>
                        </ul>
                    </div>

                    {/* Rule 9: Withdrawal & Expulsion */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            9. 탈퇴 및 제명
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                                    (1) 자진 탈퇴
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 ml-4">
                                    운영진에게 의사 전달 후 탈퇴 가능
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                                    (2) 제명 사유
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-1">
                                    <li>지속적인 무단 불참</li>
                                    <li>회비 미납 2개월 이상</li>
                                    <li>운영진 판단으로 동호회에 심각한 악영향</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Rule 10: Supplementary */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            10. 부칙
                        </h2>
                        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                            <li className="flex items-start">
                                <span className="font-bold mr-2">1.</span>
                                <span>본 회칙은 운영진 동의로 개정 가능</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-bold mr-2">2.</span>
                                <span>개정 후 즉시 효력 발생</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </main>
    );
}

