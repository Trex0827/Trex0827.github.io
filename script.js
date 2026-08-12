const projects = {
  soul:{title:'C++ 소울 게임',type:'UNREAL ENGINE 5.4.4 · 1인 제작',image:'assets/images/soul-overview.png',tags:['C++','Enhanced Input','Behavior Tree','State Tree','DataTable'],video:'https://www.youtube.com/@티렉스-0123',media:[
    ['assets/images/soul-overview.png','assets/images/soul-character-hierarchy-a.png','assets/images/soul-character-hierarchy-b.png'],
    ['assets/images/soul-input-overview.png','assets/images/soul-input-actions.png'],
    ['assets/videos/soul-combo-play.mp4','assets/images/soul-combo-flow.png','assets/images/soul-combo-functions.png','assets/images/soul-combo-logic.png'],
    ['assets/videos/soul-dodge-play.mp4','assets/images/soul-movement-dodge.png','assets/images/soul-movement-stamina.png','assets/images/soul-movement-run.png'],
    ['assets/videos/soul-lockon-play.mp4','assets/images/soul-lockon-screen.jpeg','assets/images/soul-lockon-logic.png'],
    ['assets/videos/soul-justdodge-play.mp4','assets/images/soul-justdodge-effect.png','assets/images/soul-justdodge-restore.png','assets/images/soul-justdodge-values.png'],
    ['assets/videos/soul-summon-play.mp4','assets/images/soul-summon-overview.png','assets/images/soul-summon-deferred.png','assets/videos/soul-topview-play.mp4','assets/images/soul-topview-camera.png'],
    ['assets/images/soul-monster-datatable.png','assets/images/soul-monster-sheet-1.png','assets/images/soul-monster-sheet-2.png','assets/images/soul-monster-sheet-3.png'],
    ['assets/images/soul-ai-tree-melee.png','assets/images/soul-ai-tree-ranged.png'],
    ['assets/videos/soul-ai-melee-play.mp4','assets/videos/soul-ai-ranged-play.mp4','assets/images/soul-ai-decorator.png','assets/images/soul-ai-task.png','assets/images/soul-ai-attack-call.png']
  ],slides:[
    ['PROJECT OVERVIEW','C++를 중심으로 설계한 소울라이크','공통 BaseCharacter를 만들고 플레이어·일반 몬스터·보스를 자식 클래스로 확장했습니다. 전투의 핵심 로직은 C++로 작성하고, 블루프린트는 에셋과 세부 값 조정에 사용했습니다.',['BaseCharacter → Player / Monster 계층 구조','C++ 80%, Blueprint 20%로 역할 분리','플레이어와 몬스터의 공통 기능을 베이스에 집중']],
    ['INPUT SYSTEM','행동 단위로 나눈 Enhanced Input','언리얼 엔진의 Enhanced Input을 사용해 공격·달리기·점프·흡수·소환을 독립적인 Input Action으로 관리했습니다. Started, Triggered, Completed를 행동 특성에 맞게 구분했습니다.',['입력 행동별 Input Action 분리','Started / Triggered / Completed 이벤트 활용','입력 변경이 전투 로직에 미치는 범위 축소']],
    ['COMBAT','입력 예약으로 연결되는 3단 콤보','공격 입력이 콤보 가능 구간보다 먼저 들어오면 입력을 예약하고, Anim Notify가 도착한 시점에 다음 공격으로 연결합니다. 입력 타이밍을 놓쳐도 조작감이 끊기지 않도록 만들었습니다.',['Attack 함수에서 현재 콤보 단계 관리','Save Combo로 다음 입력을 예약','Reset Combo로 연계 종료 상태 정리','최대 3단까지 이어지는 일반 공격']],
    ['MOVEMENT','회피·달리기·스태미나 관리','마지막 이동 입력 벡터를 바탕으로 회피 방향을 정하고, 회피·달리기 중에는 스태미나를 소모합니다. 행동하지 않을 때는 회복하고, 달리기는 이동 중에만 유지됩니다.',['공격/회피 중 중복 회피 방지','회피 시 고정 스태미나 소모','달리기 중 초당 소모, 비행동 시 자동 회복']],
    ['TARGETING','가장 가까운 적을 향하는 락온','플레이어 주변에서 가장 가까운 적을 탐색해 락온 대상으로 지정합니다. 락온 상태에서는 카메라가 대상 방향으로 보간 회전하고 캐릭터는 대상을 바라보며 이동합니다.',['대상 탐색과 락온 상태 전환','카메라 회전 보간','전투 중 시점과 이동 방향의 일관성 유지']],
    ['JUST DODGE','시간을 제어하는 저스트 회피 연출','정확한 타이밍의 회피에 대해 글로벌 시간은 0.1배속으로 낮추고, 플레이어만 Custom Time Dilation으로 정상 속도를 유지합니다. FOV와 채도도 함께 제어해 성공 피드백을 강화했습니다.',['Global Time Dilation 0.1배속','플레이어 Custom Time Dilation 유지','카메라 FOV 변경과 흑백 화면 연출','일정 시간 후 원상 복구']],
    ['SUMMON & CAMERA','잔상 흡수·소환과 보스 시점','처치한 몬스터의 잔상을 흡수해 클래스를 저장하고, 이후 소환수로 생성합니다. BeginPlay 이전에 상태를 주입하기 위해 Deferred Spawn을 사용했습니다. 보스 광역 패턴에는 탑뷰 카메라도 연결했습니다.',['상호작용으로 몬스터 잔상 흡수','Deferred Spawn으로 소환수 상태 선주입','탑뷰 전환 시 거리·회전을 매 프레임 보간']],
    ['MONSTER DATA','데이터 테이블 기반 몬스터 구성','일반 몬스터와 보스의 스탯을 스프레드시트로 정리해 Data Table로 임포트했습니다. 개체마다 다른 수치를 코드에 직접 작성하지 않아 밸런스 조정이 쉬운 구조입니다.',['휴머노이드·6발 개틀링·4발 포탑·메카 드래곤','몬스터별 AttackRange·스탯 데이터화','전투 수치와 클래스 로직 분리']],
    ['BEHAVIOR TREE','근거리·원거리 행동 트리 분리','공격 거리와 패턴이 다른 몬스터를 하나의 트리에 넣지 않고 근거리/원거리 트리로 나눴습니다. 같은 공간에서 조건을 세밀하게 제어할 수 있도록 구조를 분리했습니다.',['근거리 / 원거리 Behavior Tree 분리','사거리 밖에서는 Move To, 조건 충족 시 공격으로 전환','몬스터 특성에 맞는 트리 확장 가능']],
    ['AI DECISION','Can Attack?에서 전투 실행까지','커스텀 Decorator는 플레이어와의 2D 거리에서 충돌 반경을 보정하고 Data Table의 AttackRange와 비교합니다. AI Task는 판단 결과를 BaseMonster::Attack()에 전달해 판단과 실행을 분리했습니다.',['Can Attack? 커스텀 Decorator','낮은 우선순위 Move To 중단','AI Task는 판단, Monster 클래스는 실제 공격 처리']]
  ]},
  vr:{title:'VR 방탈출',type:'UNREAL ENGINE 5.4.4 · 1인 제작',image:'assets/images/vr-overview.png',tags:['C++','Blueprint','Oculus VR','UMG','Niagara'],video:'https://youtu.be/UYV-2LxlilY?si=ug2M52ZKUwMmlfyC',media:[
    ['assets/images/vr-overview.png'],
    ['assets/images/vr-level-layout.png','assets/images/vr-base-actor-a.png','assets/images/vr-base-actor-b.png','assets/images/vr-base-actor-c.png'],
    ['assets/videos/vr-puzzle1-play.mp4','assets/images/vr-puzzle1-scene.jpeg','assets/images/vr-puzzle1-button.png','assets/images/vr-puzzle1-jumpscare.png'],
    ['assets/videos/vr-puzzle2-play.mp4','assets/images/vr-puzzle2-scene.jpeg','assets/images/vr-puzzle2-light.png','assets/images/vr-puzzle2-number.png','assets/images/vr-puzzle2-logic.png'],
    ['assets/videos/vr-puzzle3-play.mp4','assets/images/vr-puzzle3-scene.jpeg','assets/images/vr-puzzle3-niagara-1.png','assets/images/vr-puzzle3-niagara-2.png','assets/images/vr-puzzle3-niagara-3.png'],
    ['assets/videos/vr-puzzle4-play.mp4','assets/images/vr-puzzle4-keypad-1.png','assets/images/vr-puzzle4-keypad-2.png','assets/images/vr-puzzle4-keypad-3.png','assets/images/vr-puzzle4-keypad-4.png','assets/images/vr-puzzle4-ui.jpeg']
  ],slides:[
    ['PROJECT OVERVIEW','VR 초보자도 바로 즐기는 4개 퍼즐','C++과 블루프린트를 혼합해 제작한 간단한 VR 방탈출 게임입니다. VR 튜토리얼처럼 조작 안내를 배치하고, 그랩·이동·던지기 같은 기본 동작을 자연스럽게 익히도록 퍼즐을 구성했습니다.',['Oculus VR 기반 1인 제작','짧고 가볍게 한 판 즐기는 구조','총 4개의 단계형 퍼즐 배치']],
    ['PUZZLE FRAMEWORK','C++ 베이스 액터로 퍼즐 상태 관리','모든 문제는 C++ 퍼즐 베이스 액터를 만든 뒤 블루프린트 자식으로 확장했습니다. 퍼즐이 해결된 뒤 다시 풀리는 상황을 막아, 게임 상태가 안정적으로 유지되도록 했습니다.',['Puzzle Base Actor를 C++로 구현','자식 블루프린트에서 퍼즐별 연출 구성','해결 완료 상태를 저장해 중복 해결 방지']],
    ['PUZZLE 01','그랩으로 배우는 큐브·버튼 상호작용','첫 번째 퍼즐은 큐브를 그랩해 버튼 위에 놓는 방식입니다. 버튼이 눌리면 숫자와 점프스케어 연출이 재생되어, 사용자가 그랩과 배치를 직관적으로 학습할 수 있습니다.',['큐브 그랩과 버튼 오버랩 판정','버튼 눌림 상태와 숫자 UI 출력','점프스케어 연출 연결']],
    ['PUZZLE 02','손전등으로 숨겨진 숫자 찾기','손전등을 그랩하면 켜지고, 그림에 빛을 비추면 숫자가 나타납니다. 관찰과 도구 사용을 결합한 퍼즐로 구성했습니다.',['손전등 그랩과 On/Off 상태','빛 조사에 따라 나타나는 숫자','VR 환경에서 시선과 손 동작 활용']],
    ['PUZZLE 03','감자에게 푸룬주스 전달하기','그랩으로 물건을 잡고 이동·투척하는 동작을 익힐 수 있도록 만든 퍼즐입니다. 목표 오브젝트와의 상호작용에 나이아가라 이펙트를 적용했습니다.',['그랩·이동·던지기 학습','목표 오브젝트 전달 판정','나이아가라 이펙트 제작']],
    ['PUZZLE 04','UMG 키패드로 비밀번호 입력','키패드 가까이에서 A 버튼을 누르면 UMG 키패드가 열리고, 트리거 버튼으로 비밀번호를 입력합니다. VR 조작과 UI를 연결한 마지막 문제입니다.',['근접 트리거로 키패드 열기','UMG 기반 숫자 입력 UI','트리거 버튼 입력 처리']]
  ]},
  network:{title:'네트워크 미니 프로젝트',type:'UNREAL ENGINE 5.4 · 3인 제작',image:'assets/images/network-overview.png',tags:['Blueprint','Networking','Server RPC','Client RPC','GameState','PlayerController'],video:'',videoLinks:[
    {label:'P2 게임 화면',url:'https://youtu.be/2cwlQuqCa-A'},
    {label:'P1 게임 화면',url:'https://youtu.be/ml2ENxkPXpk'}
  ],media:[
    ['assets/images/network-overview.png'],
    ['assets/images/network-gamestate-register-team.png','assets/images/network-gamestate-start-battle-1.png','assets/images/network-gamestate-start-battle-2.png'],
    ['assets/images/network-gamestate-turn-ready.png','assets/images/network-gamestate-speed-priority.png'],
    ['assets/images/network-server-skill-rpc.png','assets/images/network-skill-action-dispatch.png'],
    ['assets/images/network-server-position-1.png','assets/images/network-server-position-2.png','assets/images/network-server-position-3.png'],
    ['assets/images/network-action-queue.png','assets/images/network-hand-card-update.png','assets/images/network-gamestate-refresh-ui.png'],
    ['assets/images/network-overview.png']
  ],slides:[
    ['PROJECT OVERVIEW','서버 권한 중심으로 구성한 턴 전투','GameState에서 팀 캐릭터와 전투 시작 조건을 관리하고, BP_TurnPlayerController에서 타깃 선택·스킬 요청·액션 큐·카드 상태를 처리하는 방식으로 네트워크 전투 흐름을 구성했습니다. 단순히 멀티플레이가 된다는 결과보다, 서버와 각 클라이언트가 어떤 책임을 갖는지 보여주는 로직을 중심으로 정리했습니다.',['GameState: 팀 캐릭터 등록·전투 시작·턴 우선순위 관리','TurnPlayerController: 서버 스킬 요청·액션 큐·카드 상태 처리','Owning Client RPC와 Server RPC를 용도에 맞게 분리']],
    ['NETWORK START','팀 등록부터 클라이언트 카메라 세팅까지','RegisterTeamCharacters 이벤트에서 플레이어 구분에 따라 Team 1 / Team 2 캐릭터 배열을 저장합니다. 전투 시작 시 각 PlayerController를 가져와 Client Set Camera를 호출하고, 두 팀의 캐릭터가 모두 준비됐는지 확인한 뒤 다음 전투 단계로 진행하도록 구성했습니다.',['RegisterTeamCharacters로 팀별 캐릭터 배열 등록','Client Set Camera: Replicated To Owning Client','Team 1 / Team 2 캐릭터 수를 확인해 전투 준비 상태 판단']],
    ['TURN PRIORITY','캐릭터 속도 합으로 선턴 팀 결정','두 팀의 캐릭터가 준비되면 Team 1 Total Speed와 Team 2 Total Speed를 0으로 초기화한 뒤, 각 팀 캐릭터의 Current Speed를 순회하며 합산합니다. 계산된 두 팀의 총 속도를 비교해 어느 팀이 먼저 행동할지 결정하는 턴 우선순위 로직입니다.',['각 팀 캐릭터 배열을 For Each Loop로 순회','Current Speed를 Team Total Speed에 누적','두 팀의 Total Speed 비교 결과로 선턴 분기']],
    ['SERVER SKILL','클라이언트 입력을 서버에서 스킬 실행으로 변환','스킬 사용 요청은 Server_ExecuteSkill 이벤트로 서버에 전달합니다. 서버는 Target Enemy, Skill ID, Damage Ratio, Hit Count 같은 실행 데이터를 받은 뒤 스킬 타입에 따라 Melee·Ranged·AOE·Ult 액션으로 분기해 캐릭터 전투 함수를 호출합니다.',['Server_ExecuteSkill: Executes On Server','Target Enemy / Skill ID / Damage Ratio / Hit Count 전달','Melee · Ranged · AOE · Ult 액션으로 실행 경로 분리']],
    ['SERVER POSITION','서버에서 전투 슬롯 위치를 확정','Set Character Location Server에서 플레이어 구분과 Slot Index를 이용해 P1/P2 위치 태그를 만들고, 해당 태그의 액터를 찾아 전투 위치를 계산합니다. 캐릭터 캡슐의 Half Height를 Z 위치에 보정한 뒤 서버에서 Location과 Rotation을 확정합니다.',['P1 / P2와 Slot Index로 전투 위치 태그 구성','Get All Actors with Tag로 슬롯 액터 탐색','Capsule Half Height를 보정한 뒤 Set Actor Location And Rotation']],
    ['ACTION QUEUE & UI','카드 선택을 액션 큐로 만들고 UI까지 갱신','선택된 카드 정보는 Action Queue와 Current Action Index를 사용해 순서대로 처리합니다. S_CardData에서 스킬 타입·대미지 비율·히트 수·타깃 정보를 꺼내 다음 액션으로 넘기고, 사용한 카드 배열을 교체·제거한 뒤 Battle UI와 카드 버튼 상태를 갱신하도록 구성했습니다.',['Action Queue + Current Action Index로 실행 순서 관리','S_CardData의 전투 정보를 다음 액션에 전달','Hand Cards 배열 갱신 후 WBP Battle Main UI 업데이트']],
    ['PLAY VIDEO','P1 · P2 실제 네트워크 플레이 화면','두 플레이어 화면을 각각 확인할 수 있도록 실제 플레이 영상을 분리해 첨부했습니다. 동일한 전투에서 각 클라이언트가 보는 화면과 턴 진행 결과를 비교해 볼 수 있습니다.',['P1 게임 화면: 플레이어 1 클라이언트 시점','P2 게임 화면: 플레이어 2 클라이언트 시점','아래 버튼을 눌러 YouTube 플레이 영상을 확인']]
  ]},
  rpg:{title:'언실드 RPG',type:'UNREAL ENGINE 5.4.4 · 3인 제작 · 4주',image:'assets/images/rpg-overview.png',tags:['Blueprint','Behavior Tree','DataTable','Niagara','SVN','Notion'],video:'https://youtu.be/eZbv3sPX9Xo?si=Lp---S_0J7X1L-Tb',media:[
    ['assets/images/rpg-overview.png','assets/images/rpg-monsters.png','assets/images/rpg-bosses.png'],
    ['assets/images/rpg-monster-stats-editor.png','assets/images/rpg-monster-stats-sheet.png','assets/images/rpg-dragon-behavior-tree.png','assets/images/rpg-golem-behavior-tree.png'],
    ['assets/images/rpg-dragon-random-skill-logic.png','assets/images/rpg-dragon-claw-logic.png','assets/images/rpg-dragon-breath-logic.png'],
    ['assets/videos/rpg-airbreath-play.mp4','assets/images/rpg-air-breath-montage.png','assets/images/rpg-air-breath-example.jpg'],
    ['assets/videos/rpg-superarmor-play.mp4','assets/videos/rpg-hit-play.mp4','assets/videos/rpg-regen-play.mp4','assets/images/rpg-superarmor-start.png','assets/images/rpg-superarmor-end.png','assets/images/rpg-superarmor-notify.png','assets/images/rpg-hit-death-logic.png','assets/images/rpg-dragon-hp-logic.png','assets/images/rpg-regen-logic.png'],
    ['assets/videos/rpg-tornado-play.mp4','assets/images/rpg-tornado-logic-a.png','assets/images/rpg-tornado-logic-b.png','assets/images/rpg-tornado-overview.png'],
    ['assets/images/rpg-breath-collision-logic.png','assets/images/rpg-breath-collision-setup.png','assets/images/rpg-spawner-class-list.png','assets/images/rpg-spawner-settings.png','assets/images/rpg-field-boss-spawner.png','assets/images/rpg-field-boss-spawner-detail.png'],
    ['assets/images/rpg-npc-zia.png','assets/images/rpg-npc-golem.png','assets/images/rpg-npc-base-class.png','assets/images/rpg-npc-list.png','assets/images/rpg-npc-data-struct.png'],
    ['assets/images/rpg-dialogue-logic.png','assets/images/rpg-dialogue-data.png','assets/images/rpg-dialogue-table.png','assets/images/rpg-quest-dialogue-ui.png','assets/images/rpg-quest-flow.png','assets/images/rpg-story-script.png'],
    ['assets/images/rpg-ending-credit.png']
  ],slides:[
    ['ROLE','몬스터·NPC·스토리를 맡은 팀 RPG','4주 동안 제작한 3인 정통 RPG 프로젝트입니다. 저는 일반/보스 몬스터, NPC, 퀘스트와 스토리 흐름을 담당했습니다. SVN·Discord·Notion·스프레드시트로 변경 사항을 공유하며 콘텐츠를 통합했습니다.',['담당: 일반 몬스터·보스·NPC·스토리','스테이지별 일반 몬스터와 보스 구성','SVN 기반 버전 관리, Discord·Notion 협업']],
    ['DATA & AI','스탯 데이터와 행동 트리의 조합','몬스터 스탯은 데이터 테이블로 관리하고, 2발·4발 잡몹, 미니 골렘, 보스별 Behavior Tree를 구성했습니다. 플레이어의 거리와 상태를 바탕으로 순찰·추적·근거리·원거리 공격을 선택합니다.',['Data Table로 체력·공격 범위 등 스탯 관리','일반 몬스터와 보스의 행동 트리 분리','사거리 판정 후 적합한 공격 스킬 실행']],
    ['DRAGON ATTACK','랜덤 스킬로 만드는 보스 전투','드래곤은 0~3 사이의 난수를 저장해 4개의 스킬을 선택하도록 했습니다. 클로 공격을 포함한 여러 패턴은 공통 구조를 사용하고, 애님 몽타주 값만 달리해 재사용성을 높였습니다.',['랜덤 숫자 저장 후 스킬 분기','공통 공격 로직 + 몽타주 교체','다른 잡몹·보스에도 적용 가능한 구조']],
    ['AIR BREATH','체력 단계에 따라 달라지는 공중 브레스','드래곤의 체력이 50% 이상이면 지상에서, 50% 이하이면 공중에서 브레스를 사용합니다. 이륙·비행·공중 브레스·착지의 4개 애니메이션을 키프레임 보정으로 자연스럽게 연결했습니다.',['체력 50%를 기준으로 패턴 변경','이륙 → 비행 → 브레스 → 착지 연결','비행·불 뿜기·사운드 Notify 활용']],
    ['HIT & SURVIVAL','슈퍼아머와 피격·체력 회복','스킬 사용 중에는 슈퍼아머로 피격 애니메이션을 막고, 평상시에는 맞을 때 히트 모션이 재생되도록 했습니다. 10초간 피해가 없으면 매초 300의 체력을 회복합니다.',['슈퍼아머 시작/종료 Notify','HP 0일 때 사망 모션 재생','비전투 10초 후 초당 300 체력 회복']],
    ['TORNADO','드래곤 토네이도: 삼각형 생성 후 중앙 폭발','플레이어 주변 삼각형의 꼭짓점에 토네이도 3개를 타이밍에 맞춰 소환합니다. 3개가 모두 생성되면 중앙으로 이동하고, 겹치는 순간 폭발하며 피해를 주도록 구현했습니다.',['플레이어 주변 3개 위치 계산','토네이도 생성 수를 확인해 다음 단계 진행','중앙 이동·겹침·폭발·대미지 처리']],
    ['BREATH & SPAWNER','브레스 판정과 필드 몬스터 생성','브레스는 파티클 길이에 맞춰 콜리전 박스가 늘어났다가 줄어들고, 오버랩 중인 플레이어에게 초당 피해를 줍니다. 일반 몬스터와 필드 보스 스포너도 별도로 구성했습니다.',['브레스 길이에 연동한 콜리전 스케일','오버랩 중 초당 대미지','일반/필드 보스 스포너 분리']],
    ['NPC','월드의 안내 역할을 하는 NPC','지아, 코끼리 대마왕, 마린, 스티브, 잊혀진 용사 등 NPC의 기본 정보와 역할을 구성했습니다. 캐릭터별 대사와 퀘스트를 통해 스토리를 전달합니다.',['NPC 종류·정보 데이터 관리','NPC 상호작용 UI 구성','퀘스트 진행에 맞춘 역할 분배']],
    ['QUEST FLOW','대화창에서 퀘스트·스토리까지','NPC 대화창과 퀘스트 전체 로직을 구현하고, 대사집을 통해 스토리 진행을 연결했습니다. 플레이어가 전투 이후에도 다음 목표를 이해하고 진행하도록 만들었습니다.',['NPC 대화 UMG','퀘스트 조건과 진행 상태 관리','대사 및 스토리 흐름 연결']],
    ['ENDING','콘텐츠를 마무리하는 엔딩 크레딧','게임의 마지막에는 엔딩 크레딧을 구현해 프로젝트의 흐름을 마무리했습니다. 전투·NPC·퀘스트로 쌓은 진행이 자연스럽게 끝나는 지점을 만들었습니다.',['엔딩 연출과 크레딧 UI','스토리 완료 후 마무리 흐름','전체 플레이 영상 제공']]
  ]},
  draw:{title:'10초 드로우 게임',type:'UNREAL ENGINE 5.4.4 · 1인 제작',image:'assets/images/draw-overview.png',tags:['UMG','Blueprint','Widget Animation','UI Interaction'],video:'https://youtu.be/ov-J3BMVgFs?si=DvRL9jB_GB8YHD1a',media:[
    ['assets/images/draw-overview.png'],
    ['assets/videos/draw-hover-play.mp4','assets/images/draw-hover-logic.png','assets/images/draw-hover-scene.jpeg'],
    ['assets/videos/draw-field-play.mp4','assets/images/draw-field-scene.jpeg','assets/images/draw-field-logic.png'],
    ['assets/videos/draw-card-play.mp4','assets/images/draw-card-scene.jpeg','assets/images/draw-card-logic-1.png','assets/images/draw-card-logic-2.png']
  ],slides:[
    ['PROJECT OVERVIEW','유희왕 콘셉트의 10초 타이밍 게임','카드를 누른 상태에서 마음속으로 10초를 세고, 타이밍에 맞춰 마우스를 놓는 간단한 UMG 게임입니다. 결과에 따라 승리 엔딩을 보여주도록 게임 루프를 구성했습니다.',['언리얼 엔진 학습 1개월 차 제작','UMG만으로 구성한 2D 게임','타이밍 결과에 따라 엔딩 연출 분기']],
    ['HOVER MOTION','카드에 생동감을 주는 마우스 오버','사용자가 카드에 마우스를 올리면 좌우로 흔들리는 애니메이션이 재생됩니다. 단순한 버튼에도 반응을 더해, 조작 가능한 오브젝트라는 느낌을 전달했습니다.',['마우스 오버 이벤트 처리','좌우 흔들림 위젯 애니메이션','카드 UI의 상호작용 피드백']],
    ['FIELD ANIMATION','정적인 배경을 움직이는 듀얼 필드','게임 진입 시 듀얼 필드의 푸른 눈의 백룡이 커졌다 작아지는 반복 애니메이션을 재생합니다. 플레이 전부터 콘셉트와 분위기를 전달하는 배경 연출입니다.',['반복 스케일 애니메이션','필드 분위기를 위한 배경 연출','UI 레이어와 별도로 재생되는 오브젝트']],
    ['CARD DETAIL','선택한 카드를 자세히 보는 흐름','카드를 누르면 해당 카드가 커지고 상세하게 볼 수 있도록 UI 상태를 전환했습니다. 카드 선택→시간 측정→결과 연출로 이어지는 흐름을 명확하게 만들었습니다.',['클릭 시 카드 확대','선택 상태를 이용한 UI 전환','전체 게임 플레이 영상 제공']]
  ]},
  monkey:{title:'원숭이 슈팅 게임',type:'UNREAL ENGINE 5.4.4 · 1인 제작',image:'assets/images/monkey-overview.png',tags:['Blueprint','Line Trace','UMG','Collision','Gameplay Logic'],video:'https://youtu.be/HSRcO-d8vxs?si=j7crxd6yCKkhDm9I',media:[
    ['assets/images/monkey-overview.png'],
    ['assets/videos/monkey-destroy-play.mp4','assets/images/monkey-trace-1.png','assets/images/monkey-trace-2.png','assets/images/monkey-trace-3.png'],
    ['assets/videos/monkey-pickup-play.mp4','assets/images/monkey-pickups-scene.jpeg','assets/images/monkey-pickups-logic.png','assets/images/monkey-status-1.png','assets/images/monkey-status-2.png','assets/images/monkey-status-3.png','assets/images/monkey-status-4.png'],
    ['assets/videos/monkey-gameplay-play.mp4','assets/images/monkey-destroy-scene.jpeg','assets/images/monkey-destroy-logic.png','assets/images/monkey-play-scene.jpeg','assets/images/monkey-play-cover.jpeg']
  ],slides:[
    ['PROJECT OVERVIEW','바나나 총으로 목표를 파괴하는 FPS','디폴트 폰과 라인 트레이스를 활용해 제작한 1인칭 슈팅 게임입니다. 슈팅·아이템 획득·체력/속도 변화·목표물 파괴를 하나의 게임 루프로 연결했습니다.',['언리얼 엔진 학습 2개월 차 제작','디폴트 폰 기반 1인칭 슈팅','블루프린트로 게임플레이 로직 구성']],
    ['SHOOTING','Line Trace 기반 바나나 총','큰 바나나 총으로 발사 판정을 하고, 총알 바나나와 파괴 가능한 오브젝트를 연결했습니다. 라인 트레이스 결과에 따라 피격·파괴가 일어나도록 구성했습니다.',['Line Trace로 조준 대상 판정','총알과 파괴 가능 오브젝트 구성','컴퓨터 파괴 시 게임 목표에 반영']],
    ['PICKUP & STATUS','획득 아이템이 바꾸는 플레이 상태','탄약 바나나, HP 포션, 무적 포션 같은 픽업 아이템을 만들고, 획득 시 플레이어의 상태가 바뀌도록 했습니다. 체력과 속도 정보는 UI와 연결해 즉시 확인할 수 있습니다.',['아이템 오버랩과 획득 처리','체력·속도 상태 변경','무적 포션 효과 적용','UMG 체력 및 상태 표시']],
    ['GOAL & ENEMY','목표 카운트와 적 기본 로직','컴퓨터를 부수면 UI 카운트를 올리고, 적 캐릭터에는 기본 행동과 내구도 로직을 적용했습니다. 플레이어 행동의 결과가 명확히 보이도록 목표 UI를 구성했습니다.',['파괴 목표 카운트업','적 내구도와 기본 행동 로직','게임 플레이 전체 영상 제공']]
  ]}
};



const dialog = document.querySelector('#project-dialog');
const content = document.querySelector('#dialog-content');
const lightbox = document.querySelector('#media-lightbox');
const lightboxImage = lightbox.querySelector('img');
const galleryCounter = lightbox.querySelector('.gallery-counter');
const galleryPrev = lightbox.querySelector('.gallery-prev');
const galleryNext = lightbox.querySelector('.gallery-next');
const galleryClose = lightbox.querySelector('.gallery-close');
const projectPrev = dialog.querySelector('.project-prev');
const projectNext = dialog.querySelector('.project-next');

let lockedScrollY = 0;

let activeProject = null;
let activeSlide = 0;
let galleryItems = [];
let galleryIndex = 0;

const esc = value => String(value).replace(/[&<>"']/g, char => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
}[char]));

function media(source, title) {
  const sources = Array.isArray(source) ? source : [source];
  const items = sources
    .filter(Boolean)
    .map(item => {
      if (/\.mp4$/i.test(item)) {
        return `<video class="slide-media" src="${item}" muted autoplay loop playsinline preload="metadata" aria-label="${esc(title)} 플레이 영상"></video>`;
      }

      if (/\.(png|jpe?g|gif|webp)$/i.test(item)) {
        return `<img class="slide-media" src="${item}" data-full="${item}" alt="${esc(title)} 관련 자료 — 클릭하여 크게 보기">`;
      }

      return `<div class="slide-media placeholder">${esc(item)}</div>`;
    })
    .join('');

  return `<div class="media-gallery ${sources.length > 1 ? 'multi' : ''}">${items || '<div class="slide-media placeholder">PROJECT DETAIL</div>'}</div>`;
}

function render() {
  const project = projects[activeProject];
  if (!project) return;

  const slides = project.slides.map((slide, index) => `
    <article class="slide">
      <div>
        <span class="slide-index">${String(index + 1).padStart(2, '0')} / ${String(project.slides.length).padStart(2, '0')} · ${slide[0]}</span>
        <h3>${slide[1]}</h3>
        <p class="lead">${slide[2]}</p>
        ${index === 0 ? `<div class="slide-tags">${project.tags.map(tag => `<span>${tag}</span>`).join('')}</div>` : ''}
      </div>
      <div class="slide-side">
        <h4>IMPLEMENTATION NOTES</h4>
        <ul>${slide[3].map(note => `<li>${note}</li>`).join('')}</ul>
        ${media(project.media[index], slide[1])}
        ${index === project.slides.length - 1 && project.videoLinks?.length ? `<div class="video-link-group">${project.videoLinks.map(link => `<a class="video-link" href="${link.url}" target="_blank" rel="noopener">${esc(link.label)} ↗</a>`).join('')}</div>` : (index === project.slides.length - 1 && project.video ? `<a class="video-link" href="${project.video}" target="_blank" rel="noopener">플레이 영상 열기 ↗</a>` : '')}
      </div>
    </article>
  `).join('');

  content.innerHTML = `
    <div class="dialog-hero">
      ${project.image ? `<img src="${project.image}" alt="${esc(project.title)}">` : '<div class="vr-art">VR</div>'}
      <div class="text">
        <p>${project.type}</p>
        <h2 id="dialog-title">${project.title}</h2>
      </div>
    </div>
    <div class="project-detail">
      <div class="detail-top">
        <p>CASE STUDY · 좌우 버튼으로 구현 내용을 넘겨보세요</p>
        <span class="slider-count">${activeSlide + 1} / ${project.slides.length}</span>
      </div>
      <div class="slider">
        <div class="slides" style="transform:translateX(-${activeSlide * 100}%)">${slides}</div>
      </div>
    </div>`;

  updateProjectNavigation();
}

function updateProjectNavigation() {
  const project = projects[activeProject];
  if (!project) return;

  projectPrev.disabled = activeSlide === 0;
  projectNext.disabled = activeSlide === project.slides.length - 1;
  projectPrev.setAttribute('aria-hidden', projectPrev.disabled ? 'true' : 'false');
  projectNext.setAttribute('aria-hidden', projectNext.disabled ? 'true' : 'false');
}

function moveProjectSlide(step) {
  const project = projects[activeProject];
  if (!project) return;

  const next = activeSlide + step;
  if (next < 0 || next >= project.slides.length) return;

  activeSlide = next;
  render();

  // 슬라이드를 넘겨도 상세창의 현재 스크롤 위치는 유지하지 않고
  // 구현 내용 시작점으로 자연스럽게 맞춘다.
  const detail = content.querySelector('.project-detail');
  if (detail) detail.scrollIntoView({block: 'start'});
}

function lockBackgroundScroll() {
  if (document.body.dataset.scrollLocked === 'true') return;

  lockedScrollY = window.scrollY;
  document.body.dataset.scrollLocked = 'true';
  document.documentElement.classList.add('project-modal-open');
  document.body.classList.add('project-modal-open');
  document.body.style.position = 'fixed';
  document.body.style.top = `-${lockedScrollY}px`;
  document.body.style.left = '0';
  document.body.style.right = '0';
  document.body.style.width = '100%';
}

function unlockBackgroundScroll() {
  if (document.body.dataset.scrollLocked !== 'true') return;

  delete document.body.dataset.scrollLocked;

  // html에 scroll-behavior:smooth가 적용되어 있어도 모달을 닫을 때
  // 원래 위치로 "미끄러져 내려가는" 애니메이션이 보이지 않도록
  // 복원하는 한 순간만 강제로 즉시 스크롤한다.
  const previousScrollBehavior = document.documentElement.style.scrollBehavior;
  document.documentElement.style.scrollBehavior = 'auto';

  document.documentElement.classList.remove('project-modal-open');
  document.body.classList.remove('project-modal-open');
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.left = '';
  document.body.style.right = '';
  document.body.style.width = '';

  window.scrollTo({ top: lockedScrollY, left: 0, behavior: 'auto' });

  // 다음 프레임에서 사이트 원래 스크롤 설정을 복구한다.
  requestAnimationFrame(() => {
    document.documentElement.style.scrollBehavior = previousScrollBehavior;
  });
}

function openProject(key) {
  if (!projects[key]) return;
  activeProject = key;
  activeSlide = 0;
  render();
  lockBackgroundScroll();
  if (!dialog.open) dialog.showModal();
  history.replaceState(null, '', `#${key}`);
}

function closeProject() {
  if (lightbox.open) closeGallery();
  if (dialog.open) dialog.close();
  unlockBackgroundScroll();
  history.replaceState(null, '', location.pathname);
}

function collectProjectImages() {
  galleryItems = [...dialog.querySelectorAll('[data-full]')]
    .map(element => ({
      src: element.dataset.full,
      alt: element.alt || '프로젝트 상세 이미지'
    }))
    .filter(item => item.src);
}

function drawGallery() {
  const item = galleryItems[galleryIndex];
  if (!item) return;

  lightboxImage.src = item.src;
  lightboxImage.alt = item.alt;
  galleryCounter.textContent = `${galleryIndex + 1} / ${galleryItems.length}`;

  const hasMultiple = galleryItems.length > 1;
  galleryPrev.disabled = !hasMultiple;
  galleryNext.disabled = !hasMultiple;
}

function openGallery(clickedImage) {
  collectProjectImages();
  const clickedSrc = clickedImage.dataset.full;
  const found = galleryItems.findIndex(item => item.src === clickedSrc);
  galleryIndex = found >= 0 ? found : 0;

  lightbox.hidden = false;
  drawGallery();

  if (!lightbox.open) {
    lightbox.showModal();
  }
}

function closeGallery() {
  if (lightbox.open) {
    lightbox.close();
  }
  lightbox.hidden = false;
  lightboxImage.src = '';
}

function moveGallery(step) {
  if (galleryItems.length <= 1) return;
  galleryIndex = (galleryIndex + step + galleryItems.length) % galleryItems.length;
  drawGallery();
}

projectPrev.addEventListener('click', event => {
  event.preventDefault();
  event.stopPropagation();
  moveProjectSlide(-1);
});

projectNext.addEventListener('click', event => {
  event.preventDefault();
  event.stopPropagation();
  moveProjectSlide(1);
});

document.querySelectorAll('[data-project]').forEach(card => {
  card.addEventListener('click', () => openProject(card.dataset.project));
});

document.querySelector('.close').addEventListener('click', closeProject);

dialog.addEventListener('click', event => {
  if (event.target === dialog) closeProject();
});

// ESC로 닫을 때도 브라우저의 기본 dialog close에 맡기지 않고
// 같은 closeProject 경로를 사용해서 스크롤 잠금까지 즉시 해제한다.
dialog.addEventListener('cancel', event => {
  event.preventDefault();
  closeProject();
});

dialog.addEventListener('wheel', event => {
  if (event.target === dialog) event.preventDefault();
}, {passive:false});

document.addEventListener('click', event => {
  const clickedImage = event.target.closest('#project-dialog .slide-media[data-full]');
  if (!clickedImage) return;

  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();
  openGallery(clickedImage);
}, true);

galleryPrev.addEventListener('click', event => {
  event.preventDefault();
  event.stopPropagation();
  moveGallery(-1);
});

galleryNext.addEventListener('click', event => {
  event.preventDefault();
  event.stopPropagation();
  moveGallery(1);
});

galleryClose.addEventListener('click', event => {
  event.preventDefault();
  event.stopPropagation();
  closeGallery();
});

lightbox.addEventListener('click', event => {
  if (event.target === lightbox) {
    closeGallery();
  }
});

window.addEventListener('keydown', event => {
  if (lightbox.open) {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      moveGallery(-1);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      moveGallery(1);
    } else if (event.key === 'Escape') {
      closeGallery();
    }
    return;
  }

  if (!dialog.open) return;

  if (event.key === 'ArrowLeft') {
    event.preventDefault();
    moveProjectSlide(-1);
  } else if (event.key === 'ArrowRight') {
    event.preventDefault();
    moveProjectSlide(1);
  }
});

lightbox.addEventListener('close', () => {
  lightbox.hidden = false;
  lightboxImage.src = '';
});

if (location.hash.slice(1) in projects) {
  openProject(location.hash.slice(1));
}

/* =========================================================
   V15 — 로컬 PPT 이미지 뷰어
   Canva iframe 대신 PPT 68페이지를 이미지로 직접 표시한다.
   좌우 버튼 / PPT 양끝 클릭 시 즉시 페이지를 전환한다.
   ========================================================= */
(() => {
  const pageImage = document.querySelector('#portfolio-page-image');
  const navButtons = [...document.querySelectorAll('[data-canva-nav]')];
  const indicator = document.querySelector('.canva-page-indicator');

  if (!pageImage || navButtons.length === 0) return;

  const PAGE_COUNT = 68;
  const PAGE_ROOT = 'assets/images/portfolio-pages/';
  let currentPage = 1;
  const preloadCache = new Map();

  const pageSrc = page => `${PAGE_ROOT}page-${String(page).padStart(2, '0')}.jpg`;

  function preload(page) {
    if (page < 1 || page > PAGE_COUNT || preloadCache.has(page)) return;
    const image = new Image();
    image.decoding = 'async';
    image.src = pageSrc(page);
    preloadCache.set(page, image);
  }

  function preloadAround(page) {
    [page - 3, page - 2, page - 1, page + 1, page + 2, page + 3, page + 4]
      .forEach(preload);
  }

  function updateUI() {
    navButtons.forEach(button => {
      if (button.dataset.canvaNav === 'prev') {
        button.disabled = currentPage <= 1;
      } else if (button.dataset.canvaNav === 'next') {
        button.disabled = currentPage >= PAGE_COUNT;
      }
    });

    if (indicator) {
      indicator.textContent = `${String(currentPage).padStart(2, '0')} / ${String(PAGE_COUNT).padStart(2, '0')}`;
    }

    pageImage.alt = `김민종 포트폴리오 PPT ${currentPage}페이지`;
  }

  function goToPage(page) {
    const nextPage = Math.max(1, Math.min(PAGE_COUNT, page));
    if (nextPage === currentPage) return;

    currentPage = nextPage;
    pageImage.src = pageSrc(currentPage);
    updateUI();
    preloadAround(currentPage);
  }

  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      goToPage(currentPage + (button.dataset.canvaNav === 'next' ? 1 : -1));
    });
  });

  // 초기 화면에서 다음 페이지들을 미리 준비해 첫 이동부터 빠르게 보이게 한다.
  [2, 3, 4, 5, 6].forEach(preload);
  preloadAround(1);
  updateUI();
})();

