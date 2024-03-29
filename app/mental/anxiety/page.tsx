import H1 from "@/components/H1/H1";
import P from "@/components/P/P";

export default function Page() {
  return (
    <div className={"flex flex-col items-center"}>
      <div className={"w-4/5"}>
        <H1>焦虑症</H1>
        <P>
          焦虑症（英语：anxiety
          disorder），或称焦急症、焦虑障碍，是明显感觉焦虑和恐惧感的一种精神疾病。焦虑是对未来事件的担心，恐惧则是对当前事件的反应，这些感觉可能会导致身体症状，如心跳过速和颤抖。以下为常见的焦虑症：广泛性焦虑症、特异性恐惧症、社交焦虑症、分离焦虑症、广场恐惧症、恐慌症和选择性缄默症。焦虑症会由造成症状的原因来区分，人们往往有不止一种的焦虑症。
        </P>
        <P>
          遗传与环境都可能是造成导致焦虑的原因，孩童时期遭受虐待、家族有精神病史以及贫穷都有可能是焦虑症的危险因子。
        </P>
      </div>
      <div className={"w-4/5"}>
        <H1>症状</H1>
        <P>
          患者的情绪表现的非常不安与恐惧，患者常常对现实生活中的某些事情或将来的某些事情表现的过分担忧，有时患者也可以无明确目标的担忧。这种担心往往是与现实极不相称的，使患者感到非常的痛苦。还伴有自主神经亢进，肌肉紧张或跳动等自律神经失调的症状。部分患者会自觉身体总是不舒服多次去医院看医生，又检查不出症状。但是对于患者来说，总会一直担心。
        </P>
      </div>
      <div className={"w-4/5"}>
        <H1>病因</H1>
        <P>
          精神心理因素，许多学者认为焦虑症状的形成与思维和认知过程有着密切的、重要的关系。研究表明，一些人更愿把一些普通的事情，甚至是一些良性的事情解释为灾难的先兆。例如，人们高神经质。这与抑郁情绪的产生也有一些联系。还有就是生化的因素，例如甲状腺的病症或神经化学递质功能失调的因素所致。
        </P>
      </div>
      <div className={"w-4/5"}>
        <H1>治疗</H1>
        <P>
          焦虑症的治疗一为药物治疗，用抗焦虑药物去平静脑中过度活跃的部分。另一方面为认知行为治疗，找出生活中的压力源，避开压力，学习放松技巧，减轻压力。
        </P>
        <P>
          另外维持血糖值的稳定有助于稳定情绪，脑中缺乏血糖作燃料就容易暴躁焦虑。补充营养例如维他命B群、钙，多食用深海鱼油、青菜等，配合适当的运动，都有助于降低焦虑症。
        </P>
      </div>
      <div className={"w-4/5"}>
        <H1>注意</H1>
        <P>
          不光只有单纯的焦虑症才有这些症状，一些精神病症也可能产生焦虑症状，如精神分裂症、强迫症、睡眠障碍、抑郁症等，酒精和药物滥用，这类疾病的焦虑症状只是症状之一。躯体疾病也可能引发此类症状。无论是精神病学上或是单纯的焦虑症，在临床上的症状都没有本质上的差异，但在治疗上也许比单纯的焦虑症要复杂，因为在治疗其焦虑症状的同时，还要同时治疗此类患者的其他症状，所以，此需要与单纯的焦虑症有所区分。
        </P>
      </div>
    </div>
  );
}
